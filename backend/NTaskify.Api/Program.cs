using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using NTaskify.Application.Abstractions;
using NTaskify.Application.Services;
using NTaskify.Infrastructure.Repositories;
using NTaskify.Infrastructure.Security;

var builder = WebApplication.CreateBuilder(args);

const string FrontendCorsPolicy = "FrontendCorsPolicy";

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddSingleton<ITaskCatalogService, InMemoryTaskCatalogService>();
builder.Services.AddSingleton<IUserRepository, InMemoryUserRepository>();
builder.Services.AddSingleton<IPasswordHasher, Pbkdf2PasswordHasher>();
builder.Services.AddSingleton<ITokenService, JwtTokenService>();
builder.Services.AddScoped<IAuthService, AuthService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(FrontendCorsPolicy, policy =>
    {
        policy.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var jwtSection = builder.Configuration.GetSection("Jwt");
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtSection["Issuer"],
            ValidAudience = jwtSection["Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(jwtSection["Key"]!))
        };
    });
builder.Services.AddAuthorization();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors(FrontendCorsPolicy);

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapGet("/", () => Results.Ok(new
{
    name = "N-Taskify API",
    status = "running"
}));

app.Run();