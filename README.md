# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

- #### Step 2: Use an LLM to help expand your perspective.

- #### Step 3: use an LLM to help expand your perspective.
My initial ideas: Functionality: What is underspecified is if we want to use other delimiters rather than just commas to split data. Also, what is underspecified is if there may be integers or non strings passed into the CSV and how to deal with those values. Extensibility: The function could validate the types of values passed into the CSV and make sure everything is in the right type. The function could also ensure each row/column has the same amount of values so that the CSV is in the correct format.
LLM suggested: The LLM suggested to handle commas/newlines within quotes. It also suggested to let users select delimiters that might differ from commas (which I suggested as well). The LLM sugggested to allow users to declare the types of rows/columns so the parser does not have to infer. The results differed by prompt as when I asked an LLM simply to only list the top 5 most important issues, it was able to find the most important issues rather than smaller issues like making the UI more presentable but instead on handling quotes correctly, delimiters, and clear error handling. I resonate with handling the quotes correctly as well as the delimiters the most.
FUNCTIONALITY:
1. As a developer using the parser, I want quoted fields to be handled correctly so I can trust the data matches the CSV source. (Me)
2. As a developer working with a large CSV, I want clear error messages with row and column numbers so I can quickly fix bad CSV data. (LLM)
EXTENSIBILITY:
3. as a developer, I want to configure delimiters and support different newline characters so parser works with CSVs from Excel etc. (Me + LLM)
4. As a developer, I want headers normalized and validated so that my rows map to predictable keys and I catch errors early (LLM)


### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
