using NTaskify.Application.Abstractions;
using NTaskify.Application.Dtos;
using NTaskify.Application.Exceptions;
using NTaskify.Domain.Entities;

namespace NTaskify.Application.Services;

public class AuthService : IAuthService
{
    private readonly IUserRepository _userRepository;
    private readonly IPasswordHasher _passwordHasher;
    private readonly ITokenService _tokenService;

    public AuthService(IUserRepository userRepository, IPasswordHasher passwordHasher, ITokenService tokenService)
    {
        _userRepository = userRepository;
        _passwordHasher = passwordHasher;
        _tokenService = tokenService;
    }

    public async Task<AuthResponse> RegisterAsync(RegisterRequest request)
    {
        if (await _userRepository.FindByEmailAsync(request.Email) is not null)
            throw new AuthException("Bu e-posta adresi zaten kayıtlı.");

        if (!string.IsNullOrWhiteSpace(request.ReferredByCode)
            && await _userRepository.FindByReferralCodeAsync(request.ReferredByCode) is null)
            throw new AuthException("Geçersiz referans kodu.");

        var user = new User
        {
            UserName = request.UserName,
            Email = request.Email,
            PasswordHash = _passwordHasher.Hash(request.Password),
            ReferralCode = GenerateReferralCode()
        };

        await _userRepository.AddAsync(user);

        return BuildAuthResponse(user);
    }

    public async Task<AuthResponse> LoginAsync(LoginRequest request)
    {
        var user = await _userRepository.FindByEmailAsync(request.Email)
            ?? throw new AuthException("E-posta veya şifre hatalı.");

        if (!_passwordHasher.Verify(request.Password, user.PasswordHash))
            throw new AuthException("E-posta veya şifre hatalı.");

        if (!user.IsActive)
            throw new AuthException("Bu hesap devre dışı bırakılmış.");

        return BuildAuthResponse(user);
    }

    private AuthResponse BuildAuthResponse(User user)
    {
        var (token, expiresAt) = _tokenService.GenerateToken(user);
        var userDto = new UserDto(user.Id.ToString(), user.UserName, user.Email, user.ReferralCode, user.Role.ToString());
        return new AuthResponse(token, expiresAt, userDto);
    }

    private static string GenerateReferralCode()
        => Guid.NewGuid().ToString("N")[..8].ToUpperInvariant();
}
