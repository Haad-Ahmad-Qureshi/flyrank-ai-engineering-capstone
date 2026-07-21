# AI Workflow Comparison – Round One vs Round Two

## Introduction
In this task, I implemented a settings form validation feature twice using AI assistance. The first version (round one) was created using a vague prompt, while the second version (round two) used a structured prompt with clear requirements, constraints, and verification steps.

## Code Quality Comparison
The round one implementation was less structured and lacked clarity. The validation logic was basic and not well organized, making it harder to read and maintain. In contrast, the round two implementation was significantly cleaner and more modular. The code was easier to understand due to clear separation of concerns and better structure.

## Correctness and Validation
Round one had limited validation and missed several important cases. Some inputs were not properly validated, and error handling was incomplete. In round two, validation was more robust:
- Name field correctly checks for empty and whitespace input
- Email validation uses a proper format check
- Password enforces a minimum length of 6 characters  
Overall, round two handled correctness much better.

## Accessibility and User Experience
The round one version had poor user feedback, likely using a single error message or unclear messaging. In round two, each input field had its own error message displayed directly below it. This significantly improved user experience by making errors clear and specific.

## Edge Cases
Round one did not properly handle edge cases such as:
- Empty inputs
- Invalid email formats
- Short passwords

Round two handled these effectively, including trimming whitespace and validating multiple invalid email formats.

## Time and Effort
Initially, round one felt faster because it required only a single prompt. However, it required more manual checking and fixing afterward. Round two took more time upfront due to writing a detailed prompt, but it reduced debugging time significantly. Overall, round two was more efficient.

## AI Mistakes Identified
In round one, the AI produced incomplete validation logic and did not handle all edge cases. It also lacked proper user feedback design. These issues had to be identified manually.

## Conclusion
This exercise showed that vague prompts lead to weaker results and more manual effort. Structured prompts with clear requirements and verification steps produce higher quality code and reduce overall development time. This demonstrates the importance of treating AI as a tool that requires precise direction rather than relying on it blindly.
