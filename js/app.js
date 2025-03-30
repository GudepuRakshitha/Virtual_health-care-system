document.getElementById('send-btn').addEventListener('click', function () {
    const input = document.getElementById('chat-input').value;
    const output = document.getElementById('chat-output');

    if (input.trim()) {
        output.innerHTML += `<div>You: ${input}</div>`;
        document.getElementById('chat-input').value = '';

        // Simulate AI response
        setTimeout(() => {
            output.innerHTML += `<div>Assistant: How can I help you with "${input}"?</div>`;
            output.scrollTop = output.scrollHeight;
        }, 1000);
    }
});
