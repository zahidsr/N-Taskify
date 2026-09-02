namespace NTaskify.Application.Dtos;

public record RegisterRequest(string UserName, string Email, string Password, string? ReferredByCode);

public record LoginRequest(string Email, string Password);

public record UserDto(string Id, string UserName, string Email, string ReferralCode, string Role);

public record AuthResponse(string Token, DateTimeOffset ExpiresAt, UserDto User);
