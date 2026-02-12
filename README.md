# Blazor Rich Text Editor with Web Spell Checker

## Overview

This project showcases a modern web application built with **Blazor** that combines two powerful components:

- **Syncfusion Rich Text Editor**: A feature-rich WYSIWYG editor for content creation
- **WProofreader (Web Spell Checker)**: Real-time spell checking and grammar correction

The integration demonstrates best practices for combining third-party components in a Blazor application and provides a solid foundation for building content management systems or editing applications.

## Features

- **Rich Text Editing**: Full-featured WYSIWYG editor with formatting tools
- **Real-time Spell Checking**: Automatic spell and grammar checking as you type
- **Smart Suggestions**: Instant correction suggestions for marked errors

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **.NET 8.0 SDK** or later ([Download](https://dotnet.microsoft.com/download))
- **Visual Studio Code** or **Visual Studio 2022** (recommended)
- **Git** for version control

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SyncfusionExamples/blazor-richtexteditor-webspellchecker.git
cd blazor-richtexteditor-webspellchecker
```

### 2. Navigate to Project Directory

```bash
cd Web-Spell-Checker
```

### 3. Restore NuGet Packages

```bash
dotnet restore
```

### 4. Build the Project

```bash
dotnet build
```

### 5. Run the Application

```bash
dotnet run
```

The application will start at `https://localhost:5001` (or the port shown in your terminal).

## Usage

### Accessing the Spell Checker

1. Navigate to the application in your browser
2. Start typing or paste existing text into the editor
3. Misspelled words will be underlined automatically
4. Hover over underlined words to see correction suggestions
5. Click a suggestion to apply the correction

### Example Text

The application comes with sample text containing intentional spelling and grammar mistakes to demonstrate the spell checker functionality:

```
"Enter you're text here with real spelling and grammer mistakes to see how WProofreader work..."
```