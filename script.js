/* =========================================================
   OHM'S LAW COLOR WHEEL
   Interactive Electrical Math Training
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Ohm's Law Color Wheel loaded.");


    /* =====================================================
       EQUATION DATA
    ===================================================== */

    const equations = {

        /* =================================================
           POWER EQUATIONS
        ================================================= */

        "V × I": {

            title: "Power from Voltage and Current",

            description:
                "Calculate electrical power when voltage and current are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "V",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: values =>
                values[0] * values[1],

            resultUnit: "W",

            what:
                "This equation calculates electrical power when voltage and current are known.",

            why:
                "Power describes how much electrical energy a load is using at a given moment.",

            field:
                "An electrician can use this relationship when evaluating electrical loads and understanding equipment power requirements."
        },


        "I² × R": {

            title: "Power from Current and Resistance",

            description:
                "Calculate power when current and resistance are known.",

            inputs: [
                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0,
                    max: 50,
                    step: 0.1,
                    value: 5
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: values =>
                (values[0] ** 2) * values[1],

            resultUnit: "W",

            what:
                "This equation calculates power by multiplying current squared by resistance.",

            why:
                "Because current is squared, changes in current can have a significant effect on power.",

            field:
                "This relationship can be useful when analyzing resistive loads and understanding how current affects power."
        },


        "V² / R": {

            title: "Power from Voltage and Resistance",

            description:
                "Calculate power when voltage and resistance are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "V",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: values =>
                (values[0] ** 2) / values[1],

            resultUnit: "W",

            what:
                "This equation calculates power by dividing voltage squared by resistance.",

            why:
                "It provides another way to calculate power when resistance is known instead of current.",

            field:
                "An electrician can use this relationship when working with resistive loads where voltage and resistance are known."
        },


        /* =================================================
           VOLTAGE EQUATIONS
        ================================================= */

        "I × R": {

            title: "Voltage from Current and Resistance",

            description:
                "Calculate voltage when current and resistance are known.",

            inputs: [
                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0,
                    max: 50,
                    step: 0.1,
                    value: 5
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: values =>
                values[0] * values[1],

            resultUnit: "V",

            what:
                "This is the basic Ohm's Law relationship V = I × R.",

            why:
                "It shows how current and resistance determine the voltage across a resistance.",

            field:
                "An electrician can use this relationship when analyzing circuit conditions and comparing measured voltage, current, and resistance."
        },


        "P / I": {

            title: "Voltage from Power and Current",

            description:
                "Calculate voltage when power and current are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 600
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0.1,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: values =>
                values[0] / values[1],

            resultUnit: "V",

            what:
                "This equation calculates voltage by dividing power by current.",

            why:
                "It connects a load's power requirement to the voltage and current supplying it.",

            field:
                "This relationship can be useful when working backward from equipment power and current information."
        },


        "√(P × R)": {

            title: "Voltage from Power and Resistance",

            description:
                "Calculate voltage when power and resistance are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 720
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: values =>
                Math.sqrt(values[0] * values[1]),

            resultUnit: "V",

            what:
                "This equation calculates voltage by taking the square root of power multiplied by resistance.",

            why:
                "It allows voltage to be calculated when power and resistance are known.",

            field:
                "This relationship can be useful when analyzing resistive loads from known power and resistance values."
        },


        /* =================================================
           CURRENT EQUATIONS
        ================================================= */

        "V / R": {

            title: "Current from Voltage and Resistance",

            description:
                "Calculate current when voltage and resistance are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "V",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: values =>
                values[0] / values[1],

            resultUnit: "A",

            what:
                "This equation calculates current by dividing voltage by resistance.",

            why:
                "It demonstrates the basic Ohm's Law relationship between voltage, current, and resistance.",

            field:
                "An electrician can use this relationship to estimate current through a known resistance at a given voltage."
        },


        "P / R": {

            title: "Current from Power and Resistance",

            description:
                "Calculate current when power and resistance are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 500
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: values =>
                Math.sqrt(values[0] / values[1]),

            resultUnit: "A",

            what:
                "This equation calculates current by taking the square root of power divided by resistance.",

            why:
                "It connects power consumption with the resistance of a load.",

            field:
                "This relationship can help analyze resistive loads when power and resistance are known."
        },


        "P / V": {

            title: "Current from Power and Voltage",

            description:
                "Calculate current when power and voltage are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 600
                },

                {
                    name: "Voltage",
                    symbol: "V",
                    unit: "V",
                    min: 1,
                    max: 240,
                    step: 1,
                    value: 120
                }
            ],

            calculate: values =>
                values[0] / values[1],

            resultUnit: "A",

            what:
                "This equation calculates current by dividing power by voltage.",

            why:
                "Current is an important part of understanding the electrical load placed on a circuit.",

            field:
                "An electrician can use power and voltage information to estimate the current required by a load."
        },


        /* =================================================
           RESISTANCE EQUATIONS
        ================================================= */

        "V / I": {

            title: "Resistance from Voltage and Current",

            description:
                "Calculate resistance when voltage and current are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "V",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0.1,
                    max: 50,
                    step: 0.1,
                    value: 6
                }
            ],

            calculate: values =>
                values[0] / values[1],

            resultUnit: "Ω",

            what:
                "This equation calculates resistance by dividing voltage by current.",

            why:
                "Resistance describes how strongly a material or load opposes current flow.",

            field:
                "An electrician can compare measured voltage and current to determine the effective resistance of a load."
        },


        "V² / P": {

            title: "Resistance from Voltage and Power",

            description:
                "Calculate resistance when voltage and power are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "V",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 1,
                    max: 5000,
                    step: 10,
                    value: 720
                }
            ],

            calculate: values =>
                (values[0] ** 2) / values[1],

            resultUnit: "Ω",

            what:
                "This equation calculates resistance by dividing voltage squared by power.",

            why:
                "It provides a way to determine resistance when voltage and power are known.",

            field:
                "This relationship can be useful when analyzing equipment specifications or resistive loads."
        },


        "P / I²": {

            title: "Resistance from Power and Current",

            description:
                "Calculate resistance when power and current are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 500
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0.1,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: values =>
                values[0] / (values[1] ** 2),

            resultUnit: "Ω",

            what:
                "This equation calculates resistance by dividing power by current squared.",

            why:
                "It connects resistance with the amount of power being used at a given current.",

            field:
                "An electrician can use this relationship when analyzing resistive loads from known power and current measurements."
        }

    };


    /* =====================================================
       DOM ELEMENTS
    ===================================================== */

    const hotspots =
        document.querySelectorAll(".wheel-hotspot");

    const selectedEquation =
        document.querySelector("#selectedEquation");

    const equationDescription =
        document.querySelector("#equationDescription");

    const calculatorInputs =
        document.querySelector("#calculatorInputs");

    const resultValue =
        document.querySelector("#resultValue");

    const whatIsIt =
        document.querySelector("#whatIsIt");

    const whyItMatters =
        document.querySelector("#whyItMatters");

    const fieldUse =
        document.querySelector("#fieldUse");

    const practiceButton =
        document.querySelector("#practiceButton");

    const practiceBox =
        document.querySelector("#practiceBox");


    /* =====================================================
       CURRENT EQUATION
    ===================================================== */

    let currentEquation = null;


    /* =====================================================
       FORMAT NUMBERS
    ===================================================== */

    function formatNumber(value) {

        if (!Number.isFinite(value)) {
            return "—";
        }

        if (Math.abs(value) >= 1000) {

            return value.toLocaleString(
                "en-US",
                {
                    maximumFractionDigits: 2
                }
            );

        }

        return Number(
            value.toFixed(2)
        ).toString();

    }


    /* =====================================================
       LOAD EQUATION
    ===================================================== */

    function loadEquation(equationKey) {

        const equation =
            equations[equationKey];

        if (!equation) {
            console.warn(
                "Equation not found:",
                equationKey
            );

            return;
        }


        currentEquation =
            equationKey;


        /* -----------------------------------------------
           UPDATE INFORMATION
        ------------------------------------------------ */

        selectedEquation.textContent =
            equationKey;

        equationDescription.textContent =
            equation.description;

        whatIsIt.textContent =
            equation.what;

        whyItMatters.textContent =
            equation.why;

        fieldUse.textContent =
            equation.field;


        /* -----------------------------------------------
           CLEAR OLD INPUTS
        ------------------------------------------------ */

        calculatorInputs.innerHTML = "";


        /* -----------------------------------------------
           CREATE NEW SLIDERS
        ------------------------------------------------ */

        equation.inputs.forEach(
            (input, index) => {

                const group =
                    document.createElement("div");

                group.className =
                    "input-group";


                const label =
                    document.createElement("label");


                label.innerHTML = `

                    <span>
                        ${input.name}

                        <strong>
                            ${input.symbol}
                        </strong>
                    </span>

                    <span class="live-value">

                        <span
                            id="value-${index}"
                        >
                            ${formatNumber(input.value)}
                        </span>

                        ${input.unit}

                    </span>

                `;


                const slider =
                    document.createElement("input");


                slider.type =
                    "range";

                slider.min =
                    input.min;

                slider.max =
                    input.max;

                slider.step =
                    input.step;

                slider.value =
                    input.value;

                slider.className =
                    "value-slider";


                slider.dataset.index =
                    index;


                slider.addEventListener(
                    "input",
                    updateCalculator
                );


                group.appendChild(
                    label
                );

                group.appendChild(
                    slider
                );

                calculatorInputs.appendChild(
                    group
                );

            }
        );


        /* -----------------------------------------------
           INITIAL CALCULATION
        ------------------------------------------------ */

        updateCalculator();


        /* -----------------------------------------------
           RESET PRACTICE AREA
        ------------------------------------------------ */

        practiceBox.textContent =
            "Click PRACTICE THIS EQUATION to generate a problem.";


        
    }


    /* =====================================================
       UPDATE CALCULATOR
    ===================================================== */

    function updateCalculator() {

        if (!currentEquation) {
            return;
        }


        const equation =
            equations[currentEquation];


        const sliders =
            document.querySelectorAll(
                ".value-slider"
            );


        const values =
            Array.from(sliders).map(
                slider =>
                    Number(slider.value)
            );


        /* -----------------------------------------------
           UPDATE LIVE INPUT VALUES
        ------------------------------------------------ */

        sliders.forEach(
            (slider, index) => {

                const display =
                    document.querySelector(
                        `#value-${index}`
                    );


                if (display) {

                    display.textContent =
                        formatNumber(
                            values[index]
                        );

                }

            }
        );


        /* -----------------------------------------------
           CALCULATE RESULT
        ------------------------------------------------ */

        let result;

        try {

            result =
                equation.calculate(values);

        } catch (error) {

            console.error(
                "Calculation error:",
                error
            );

            result =
                NaN;

        }


        /* -----------------------------------------------
           DISPLAY RESULT
        ------------------------------------------------ */

        if (
            Number.isFinite(result)
        ) {

            resultValue.textContent =
                `${formatNumber(result)} ${equation.resultUnit}`;

        } else {

            resultValue.textContent =
                "—";

        }

    }


    /* =====================================================
       WHEEL CLICK EVENTS
    ===================================================== */

    hotspots.forEach(
        hotspot => {

            hotspot.addEventListener(
                "click",
                () => {

                    const equation =
                        hotspot.dataset.equation;


                    /* Remove active state */

                    hotspots.forEach(
                        item => {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    /* Activate selected section */

                    hotspot.classList.add(
                        "active"
                    );


                    /* Load calculator */

                    loadEquation(
                        equation
                    );

                }
            );


            /* -------------------------------------------
               MOUSE HOVER
            -------------------------------------------- */

            hotspot.addEventListener(
                "mouseenter",
                () => {

                    hotspot.classList.add(
                        "hovered"
                    );

                }
            );


            hotspot.addEventListener(
                "mouseleave",
                () => {

                    hotspot.classList.remove(
                        "hovered"
                    );

                }
            );

        }
    );


    /* =====================================================
       PRACTICE PROBLEMS
    ===================================================== */

    const practiceProblems = {

        "V × I":
            "A 120 V load draws 8 A. What is its power?",

        "I² × R":
            "A 5 A current flows through a 20 Ω resistance. How much power is produced?",

        "V² / R":
            "A 120 V load has 20 Ω of resistance. How much power does it use?",

        "I × R":
            "A circuit has 5 A of current and 20 Ω of resistance. What voltage is present?",

        "P / I":
            "A load uses 600 W and draws 5 A. What voltage is supplying it?",

        "√(P × R)":
            "A load uses 720 W and has 20 Ω of resistance. What voltage is required?",

        "V / R":
            "A 120 V circuit has a 20 Ω load. What current should flow?",

        "P / R":
            "A 600 W load has 20 Ω of resistance. What current does it draw?",

        "P / V":
            "A 120 V load uses 600 W. Approximately how much current does it draw?",

        "V / I":
            "A load has 120 V across it and draws 6 A. What is its resistance?",

        "V² / P":
            "A 120 V load uses 720 W. What is its resistance?",

        "P / I²":
            "A load uses 500 W while drawing 5 A. What is its resistance?"

    };


    /* =====================================================
       PRACTICE BUTTON
    ===================================================== */

    practiceButton.addEventListener(
        "click",
        () => {

            if (!currentEquation) {

                practiceBox.textContent =
                    "Select an equation on the wheel first.";

                return;

            }


            const problem =
                practiceProblems[
                    currentEquation
                ];


            practiceBox.innerHTML = `

                <strong>
                    YOUR PRACTICE PROBLEM
                </strong>

                <p>
                    ${problem}
                </p>

                <span>
                    Use the calculator above
                    to work it out.
                </span>

            `;

        }
    );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    selectedEquation.textContent =
        "Select an equation above";

    equationDescription.textContent =
        "Click one of the equations on the color wheel to begin.";

});