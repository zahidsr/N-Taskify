using System.Collections.Concurrent;
using NTaskify.Application.Abstractions;
using NTaskify.Domain.Entities;

namespace NTaskify.Infrastructure.Repositories;

public class InMemoryPointTransactionRepository : IPointTransactionRepository
{
    private readonly ConcurrentBag<PointTransaction> _transactions = new();

    public Task AddAsync(PointTransaction transaction)
    {
        _transactions.Add(transaction);
        return Task.CompletedTask;
    }

    public Task<int> GetBalanceAsync(Guid userId)
    {
        var balance = _transactions.Where(t => t.UserId == userId).Sum(t => t.Amount);
        return Task.FromResult(balance);
    }
}
