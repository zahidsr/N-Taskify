using NTaskify.Domain.Entities;

namespace NTaskify.Application.Abstractions;

public interface IUserRepository
{
    Task<User?> FindByEmailAsync(string email);

    Task<User?> FindByReferralCodeAsync(string referralCode);

    Task<User?> FindByIdAsync(Guid id);

    Task AddAsync(User user);
}
