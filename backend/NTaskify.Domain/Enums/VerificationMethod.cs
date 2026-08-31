namespace NTaskify.Domain.Enums;

[Flags]
public enum VerificationMethod
{
    None = 0,
    QrCode = 1,
    Geofencing = 2,
    VisualProof = 4,
    BehaviorAnalysis = 8
}