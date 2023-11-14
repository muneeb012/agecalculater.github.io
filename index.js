function calculateAge() {
    // Get the input values
    // Show loading indicator
    document.getElementById('loading').style.display = 'block';

    // Get the input values
    var dob1 = new Date(document.getElementById('dob1').value);
    var dob2 = new Date(document.getElementById('dob2').value);

    // Simulate a delay (you can replace this with your actual calculation)
    setTimeout(function () {
        // Calculate the age difference
        var ageDifference = Math.abs(dob1 - dob2);
        var ageInYears = Math.floor(ageDifference / (365.25 * 24 * 60 * 60 * 1000));

        // Display the age result
        document.getElementById('ageResult').textContent = 'Age Difference is ' + ageInYears + ' years';

        // Show age result and hide loading indicator
        document.getElementById('ageResult').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    }, 2000); // Simulating a delay of 1.5 seconds, replace with your actual calculation time
}
