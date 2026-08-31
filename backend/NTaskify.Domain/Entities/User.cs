using NTaskify.Domain.Common;

namespace NTaskify.Domain.Entities;

public class User : BaseEntity
{
    public required string UserName { get; set; }

    public required string Email { get; set; }

    public required string ReferralCode { get; set; }

    public bool IsActive { get; set; } = true;
}