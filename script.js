document.getElementById('generateMarkdown').addEventListener('click', generateMarkdown);
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard);

function generateMarkdown() {
    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        // Add other fields here
    };
    
    // Format the data into Markdown
    let markdownText = `# ${formData.name}\n`;
    // Add other fields formatted in Markdown
    // e.g., markdownText += `## Class\n${formData.class}\n`;
    
    // Store the generated Markdown in a hidden textarea or in memory for copying
    navigator.clipboard.writeText(markdownText).then(() => {
        alert("Markdown text copied to clipboard!");
    }, (err) => {
        console.error('Could not copy text: ', err);
    });
}

function copyToClipboard() {
    // Assuming generateMarkdown function already stores the Markdown in a variable or element
    generateMarkdown(); // This will automatically copy the Markdown to the clipboard
}
