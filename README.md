# Blazor Rich Text Editor with Web Spell Checker Integration

[![.NET Version](https://img.shields.io/badge/.NET-10.0-512BD4?logo=dotnet)](https://dotnet.microsoft.com/)
[![Syncfusion](https://img.shields.io/badge/Syncfusion-Blazor-orange)](https://www.syncfusion.com/blazor-components)

## Overview

This project demonstrates a professional integration of **Syncfusion Blazor Rich Text Editor** with **WProofreader (Web Spell Checker)** for building modern content editing applications. The sample showcases real-time spell checking and grammar correction capabilities within a feature-rich WYSIWYG editor.

### Key Components

- **Syncfusion Blazor Rich Text Editor**: Enterprise-grade WYSIWYG editor with extensive formatting capabilities
- **WProofreader**: AI-powered spell checking and grammar correction engine

## Features

- **Rich Text Editing**: Full-featured WYSIWYG editor with comprehensive formatting tools
- **Real-time Spell Checking**: Automatic spell and grammar checking as you type
- **Smart Suggestions**: Context-aware correction suggestions with hover tooltips

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- **.NET 10.0 SDK** or later ([Download](https://dotnet.microsoft.com/download))
- **Visual Studio 2022 (v17.12+)** or **Visual Studio Code** with C# extension
- **Git** for version control ([Download](https://git-scm.com/))
- A modern web browser (Chrome, Edge, Firefox, or Safari)

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/SyncfusionExamples/blazor-richtexteditor-webspellchecker.git
cd blazor-richtexteditor-webspellchecker
```

### Step 2: Navigate to Project Directory

```bash
cd Web_Spell_Checker
```

### Step 3: Set up the WProofreader SDK

For integrating the Spell Checker you need to install the below NPM package:

```bash
npm install @webspellchecker/wproofreader-sdk-js
```

### Step 4: Restore NuGet Packages

```bash
dotnet restore
```

This will download all required dependencies including:
- Syncfusion.Blazor.RichTextEditor
- Syncfusion.Blazor.Themes

### Step 5: Build the Project

```bash
dotnet build
```

### Step 6: Run the Application

```bash
dotnet run
```

The application will start and display the URL in the terminal (typically `https://localhost:5001`).

Open your browser and navigate to the displayed URL to see the application in action.

## Usage

### Accessing the Spell Checker

1. **Launch the application** and navigate to your browser
2. Click on **"Spell Checker"** in the navigation menu or navigate directly to `/`
3. **Start typing** or paste existing text into the rich text editor
4. **Observe automatic checking**: Misspelled words and grammar errors will be underlined in real-time
5. **Hover over underlined words** to see context-aware correction suggestions
6. **Click a suggestion** to instantly apply the correction

### Sample Text

The application includes demonstration text with intentional errors:

```
"Enter your text here with intentional spelling and grammar mistakes to see how WProofreader works"
```

## Project Structure

```
blazor-richtexteditor-webspellchecker/
├── Web_Spell_Checker/
│   ├── Components/
│   │   ├── Layout/
│   │   │   ├── MainLayout.razor          # Main application layout
│   │   │   └── NavMenu.razor             # Navigation menu
│   │   ├── Pages/
│   │   │   ├── RichTextEditorWithSpellChecker.razor  # Main editor page
│   │   │   └── Error.razor               # Error handling page
│   │   ├── _Imports.razor                # Global using statements
│   │   ├── App.razor                     # Root application component
│   │   └── Routes.razor                  # Routing configuration
│   ├── wwwroot/
│   │   ├── scripts/
│   │   │   └── spell-checker.js          # WProofreader integration script
│   │   ├── bootstrap/                    # Bootstrap CSS files
│   │   └── app.css                       # Custom styles
│   ├── Program.cs                        # Application entry point
│   ├── appsettings.json                  # Application configuration
│   └── Web_Spell_Checker.csproj          # Project file
├── README.md                             # This file
```

## Configuration

### WProofreader Configuration

The spell checker is configured in `wwwroot/scripts/spell-checker.js`:

```javascript
window.WEBSPELLCHECKER_CONFIG = {
    serviceId: 'YOUR_SERVICE_ID',      // Replace with your WProofreader service ID
    autoSearch: true,                   // Enable automatic spell checking
    lang: 'en_US',                      // Default language
    selectors: [
        { selector: rteContainer }      // Target the RTE container
    ]
};
```

**Important**: Replace `serviceId` with your own WProofreader service ID. You can obtain one by:
1. Visiting [WebSpellChecker](https://webspellchecker.com/)
2. Creating an account
3. Copying your service ID from the dashboard

### Syncfusion License

For production use, you need a valid Syncfusion license.

Register your license in `Program.cs`:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

Visit [Syncfusion Licensing](https://www.syncfusion.com/sales/pricing) for more information.

## Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through Static Web Assets. Include the stylesheet and script references within the <head> section of the `App.razor` file.

```html
<!-- Available themes: bootstrap5, material3, fabric, tailwind, fluent, etc. -->
<link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
<script src="_content/Syncfusion.Blazor.Core/scripts/syncfusion-blazor.min.js" type="text/javascript"></script>
```

### Documentation

- [Syncfusion Blazor Rich Text Editor](https://blazor.syncfusion.com/documentation/rich-text-editor/getting-started)
- [WProofreader Documentation](https://docs.webspellchecker.net/)
- [Blazor Documentation](https://learn.microsoft.com/aspnet/core/blazor/)
- [.NET 10 Release Notes](https://learn.microsoft.com/en-us/aspnet/core/release-notes/aspnetcore-10.0?view=aspnetcore-10.0)

**Note**: This is a demonstration project. For production use, ensure you have valid licenses for both Syncfusion components and WProofreader service, and implement appropriate security measures.
