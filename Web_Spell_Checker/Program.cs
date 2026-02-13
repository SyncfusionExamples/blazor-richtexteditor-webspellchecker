using Web_Spell_Checker.Components;
using Syncfusion.Blazor;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
// Configure Blazor Server with interactive components
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

// Register Syncfusion Blazor services
// Note: For production use, register your Syncfusion license key:
// Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
builder.Services.AddSyncfusionBlazor();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // Use custom error handler for production
    app.UseExceptionHandler("/Error", createScopeForErrors: true);

    // Enable HSTS (HTTP Strict Transport Security)
    // The default HSTS value is 30 days. Adjust for production scenarios.
    // See: https://aka.ms/aspnetcore-hsts
    app.UseHsts();
}

// Redirect HTTP requests to HTTPS
app.UseHttpsRedirection();

// Enable static file serving (CSS, JS, images)
app.UseStaticFiles();

// Enable antiforgery token validation for form submissions
app.UseAntiforgery();

// Map Blazor components with interactive server rendering
app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();