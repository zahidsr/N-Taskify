using System.Security.Cryptography;
using NTaskify.Application.Abstractions;

namespace NTaskify.Infrastructure.Security;

public class Pbkdf2PasswordHasher : IPasswordHasher
{
    private const int SaltSize = 16;
    private const int KeySize = 32;
    private const int Iterations = 100_000;
    private static readonly HashAlgorithmName Algorithm = HashAlgorithmName.SHA256;

    public string Hash(string password)
    {
        var salt = RandomNumberGenerator.GetBytes(SaltSize);
        var key = Rfc2898DeriveBytes.Pbkdf2(password, salt, Iterations, Algorithm, KeySize);
        return $"{Convert.ToBase64String(salt)}.{Convert.ToBase64String(key)}";
    }

    public bool Verify(string password, string passwordHash)
    {
        var parts = passwordHash.Split('.');
        if (parts.Length != 2)
            return false;

        var salt = Convert.FromBase64String(parts[0]);
        var expectedKey = Convert.FromBase64String(parts[1]);
        var actualKey = Rfc2898DeriveBytes.Pbkdf2(password, salt, Iterations, Algorithm, KeySize);

        return CryptographicOperations.FixedTimeEquals(actualKey, expectedKey);
    }
}
