using NTaskify.Domain.Entities;

namespace NTaskify.Application.Abstractions;

public interface IPointTransactionRepository
{
    Task AddAsync(PointTransaction transaction);

    Task<int> GetBalanceAsync(Guid userId);
}
