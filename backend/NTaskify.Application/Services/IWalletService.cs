namespace NTaskify.Application.Services;

public interface IWalletService
{
    Task<int> GetBalanceAsync(Guid userId);
}
