using NTaskify.Domain.Common;

namespace NTaskify.Domain.Entities;

public class Campaign : BaseEntity
{
    public required string Name { get; set; }

    public string? Description { get; set; }

    public DateTimeOffset StartsAt { get; set; }

    public DateTimeOffset EndsAt { get; set; }

    public bool IsActive { get; set; } = true;
}