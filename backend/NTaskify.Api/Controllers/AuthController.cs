using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NTaskify.Application.Dtos;
using NTaskify.Application.Exceptions;
using NTaskify.Application.Services;

namespace NTaskify.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly IWalletService _walletService;

    public AuthController(IAuthService authService, IWalletService walletService)
    {
        _authService = authService;
        _walletService = walletService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        try
        {
            var response = await _authService.RegisterAsync(request);
            return Ok(response);
        }
        catch (AuthException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        try
        {
            var response = await _authService.LoginAsync(request);
            return Ok(response);
        }
        catch (AuthException ex)
        {
            return Unauthorized(new { message = ex.Message });
        }
    }

    [Authorize]
    [HttpGet("me")]
    public async Task<IActionResult> Me()
    {
        var id = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? User.FindFirstValue("sub");
        var email = User.FindFirstValue(ClaimTypes.Email);
        var userName = User.FindFirstValue("userName");
        var role = User.FindFirstValue(ClaimTypes.Role);
        var balance = await _walletService.GetBalanceAsync(Guid.Parse(id!));

        return Ok(new { id, email, userName, role, balance });
    }
}
