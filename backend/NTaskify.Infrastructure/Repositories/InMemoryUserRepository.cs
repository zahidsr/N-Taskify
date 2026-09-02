using System.Collections.Concurrent;
using NTaskify.Application.Abstractions;
using NTaskify.Domain.Entities;

namespace NTaskify.Infrastructure.Repositories;

public class InMemoryUserRepository : IUserRepository
{
    private readonly ConcurrentDictionary<Guid, User> _users = new();

    public Task<User?> FindByEmailAsync(string email)
    {
        var user = _users.Values.FirstOrDefault(u =>
            string.Equals(u.Email, email, StringComparison.OrdinalIgnoreCase));
        return Task.FromResult(user);
    }

    public Task<User?> FindByReferralCodeAsync(string referralCode)
    {
        var user = _users.Values.FirstOrDefault(u =>
            string.Equals(u.ReferralCode, referralCode, StringComparison.OrdinalIgnoreCase));
        return Task.FromResult(user);
    }

    public Task<User?> FindByIdAsync(Guid id)
    {
        _users.TryGetValue(id, out var user);
        return Task.FromResult(user);
    }

    public Task AddAsync(User user)
    {
        _users[user.Id] = user;
        return Task.CompletedTask;
    }
}
