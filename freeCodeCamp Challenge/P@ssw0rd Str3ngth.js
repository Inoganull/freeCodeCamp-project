function checkStrength(password) {
    let score = 0;

    const rules = [
        { test: (p) => p.length >= 8, points: 1 },
        { test: (p) => /[a-z]/.test(p) && /[A-Z]/.test(p), points: 1 },
        { test: (p) => /[0-9]/.test(p), points: 1 },
        { test: (p) => /[!@#$%^&*]/.test(p), points: 1 }
    ];

    rules.forEach(rule => {
        if (rule.test(password)) {
        score += rule.points;
    }
    });

    if (score < 2) {
        return "weak";
    } else if (score < 4) {
        return "medium";
    } else {
        return "strong";
    }

    return password;
}

  // --- Examples ---
  console.log(`Password "12345" is: ${checkStrength("12345")}`); // weak
  console.log(`Password "pass!!!" is: ${checkStrength("pass!!!")}`); // weak
  console.log(`Password "PassWord%^!" is: ${checkStrength("PassWord%^!")}`); // medium
  console.log(`Password "S3cur3P@ssw0rd" is: ${checkStrength("S3cur3P@ssw0rd")}`); // strong