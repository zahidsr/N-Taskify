using NTaskify.Application.Dtos;
using NTaskify.Domain.Entities;
using NTaskify.Domain.Enums;

namespace NTaskify.Application.Services;

public class InMemoryTaskCatalogService : ITaskCatalogService
{
    private static readonly Guid CampaignId = Guid.Parse("11111111-1111-1111-1111-111111111111");

    private static readonly List<TaskDefinition> Tasks =
    [
        new()
        {
            Id = Guid.Parse("00000000-0000-0000-0000-000000000001"),
            CampaignId = CampaignId,
            Title = "TEKNOFEST Tanıtım Videosunu İncele",
            Description = "Resmi YouTube kanalındaki inovasyon videosunu izle ve gizli kodu doğrula.",
            Type = TaskType.VideoWatch,
            VerificationMethods = VerificationMethod.BehaviorAnalysis,
            RewardPoints = 120
        },
        new()
        {
            Id = Guid.Parse("00000000-0000-0000-0000-000000000002"),
            CampaignId = CampaignId,
            Title = "Etkinlik Standı QR Doğrulaması",
            Description = "Kampüs içi veya fuar standındaki N-Taskify QR kodunu okutarak konumunu doğrula.",
            Type = TaskType.QrScan,
            VerificationMethods = VerificationMethod.QrCode | VerificationMethod.Geofencing,
            RewardPoints = 350
        },
        new()
        {
            Id = Guid.Parse("00000000-0000-0000-0000-000000000003"),
            CampaignId = CampaignId,
            Title = "İçerik Paylaşım & Etkileşim Görevi",
            Description = "#NTaskify etiketiyle inovatif fikrini paylaş ve görsel doğrulamayı tamamla.",
            Type = TaskType.Share,
            VerificationMethods = VerificationMethod.VisualProof,
            RewardPoints = 200
        },
        new()
        {
            Id = Guid.Parse("00000000-0000-0000-0000-000000000004"),
            CampaignId = CampaignId,
            Title = "Topluluk Workshop Katılımı",
            Description = "Haftalık teknoloji atölyesine katıl ve mentor yoklamasından geç.",
            Type = TaskType.StandVisit,
            VerificationMethods = VerificationMethod.Geofencing,
            RewardPoints = 500
        }
    ];

    public IReadOnlyList<TaskDto> GetAll()
        => Tasks.Select(Map).ToList();

    private static TaskDto Map(TaskDefinition task) => new()
    {
        Id = task.Id.ToString(),
        Title = task.Title,
        Description = task.Description,
        Category = IsPhysical(task.Type) ? "Fiziksel" : "Dijital",
        Type = MapType(task.Type),
        RewardPoints = task.RewardPoints,
        VerificationMethod = MapVerification(task.VerificationMethods),
        Status = task.IsActive ? "available" : "closed"
    };

    private static bool IsPhysical(TaskType type) => type switch
    {
        TaskType.QrScan or TaskType.LocationCheckIn or TaskType.StandVisit => true,
        _ => false
    };

    private static string MapType(TaskType type) => type switch
    {
        TaskType.VideoWatch => "video",
        TaskType.ContentInteraction => "social",
        TaskType.Share => "social",
        TaskType.QrScan => "qr",
        TaskType.LocationCheckIn => "location",
        TaskType.StandVisit => "event",
        TaskType.MiniGame => "game",
        _ => "task"
    };

    private static string MapVerification(VerificationMethod methods)
    {
        var labels = new List<string>();

        if (methods.HasFlag(VerificationMethod.QrCode))
            labels.Add("QR Doğrulama");
        if (methods.HasFlag(VerificationMethod.Geofencing))
            labels.Add("Geofencing");
        if (methods.HasFlag(VerificationMethod.VisualProof))
            labels.Add("Görsel Doğrulama (YOLO)");
        if (methods.HasFlag(VerificationMethod.BehaviorAnalysis))
            labels.Add("Davranış Analizi");

        return labels.Count > 0 ? string.Join(" + ", labels) : "Doğrulama Yok";
    }
}
