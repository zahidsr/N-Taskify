using NTaskify.Domain.Common;
using NTaskify.Domain.Enums;

namespace NTaskify.Domain.Entities;

public class PointTransaction : BaseEntity
{
    public Guid UserId { get; set; }

    public int Amount { get; set; }

    public PointTransactionType Type { get; set; }

    public string? Description { get; set; }
}