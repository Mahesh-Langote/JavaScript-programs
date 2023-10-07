// ErrorHandling.js
try {
    // Code that may throw an error
    throw new Error("This is a custom error.");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Finally block executed.");
}
