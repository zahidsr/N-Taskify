using NTaskify.Application.Abstractions;

namespace NTaskify.Application.Services;

public class WalletService : IWalletService
{
    private readonly IPointTransactionRepository _pointTransactionRepository;

    public WalletService(IPointTransactionRepository pointTransactionRepository)
    {
        _pointTransactionRepository = pointTransactionRepository;
    }

    public Task<int> GetBalanceAsync(Guid userId)
        => _pointTransactionRepository.GetBalanceAsync(userId);
}
