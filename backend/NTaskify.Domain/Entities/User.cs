using NTaskify.Domain.Common;
using NTaskify.Domain.Enums;

namespace NTaskify.Domain.Entities;

public class User : BaseEntity
{
    public required string UserName { get; set; }

    public required string Email { get; set; }

    public required string PasswordHash { get; set; }

    public required string ReferralCode { get; set; }

    public UserRole Role { get; set; } = UserRole.User;

    public bool IsActive { get; set; } = true;
}