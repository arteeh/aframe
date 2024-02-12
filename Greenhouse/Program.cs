using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

WebAssemblyHostBuilder builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<Greenhouse.Greenhouse>("#greenhouse");
await builder.Build().RunAsync();