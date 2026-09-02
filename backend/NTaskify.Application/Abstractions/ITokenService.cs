using NTaskify.Domain.Entities;

namespace NTaskify.Application.Abstractions;

public interface ITokenService
{
    (string Token, DateTimeOffset ExpiresAt) GenerateToken(User user);
}
