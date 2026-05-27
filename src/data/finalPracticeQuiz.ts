export type QuizOption = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  chapter: string;
  sourceNumber: number;
  prompt: string;
  options: QuizOption[];
  answer?: QuizOption['id'];
  explanation?: string;
};

export const finalPracticeQuiz: QuizQuestion[] = [
  {
    "id": "ch12-q1",
    "chapter": "Chapter 12",
    "sourceNumber": 1,
    "prompt": "Interpret the chemical equation in terms of interacting particles: 2H 2 (g) + O 2 (g) → 2H 2 O(g)",
    "options": [
      {
        "id": "A",
        "text": "Two atoms of hydrogen react with one atom of oxygen to form two formula units of water."
      },
      {
        "id": "B",
        "text": "Two molecules of hydrogen react with one molecule of oxygen to form two molecules of water."
      },
      {
        "id": "C",
        "text": "Two moles of hydrogen react with one mole of oxygen to form two moles of water."
      },
      {
        "id": "D",
        "text": "Two grams of hydrogen react with one gram of oxygen to form two grams of water."
      }
    ],
    "answer": "B",
    "explanation": "The coefficients represent particles: 2 molecules of hydrogen react with 1 molecule of oxygen to form 2 molecules of water."
  },
  {
    "id": "ch12-q2",
    "chapter": "Chapter 12",
    "sourceNumber": 2,
    "prompt": "Interpret the chemical equation in terms of interacting numbers of moles: N 2 (g) + 3H 2 (g) → 2NH 3 (g)",
    "options": [
      {
        "id": "A",
        "text": "One molecule of nitrogen reacts with three molecules of hydrogen to form two molecules of ammonia."
      },
      {
        "id": "B",
        "text": "One gram of nitrogen reacts with three grams of hydrogen to form two grams of ammonia."
      },
      {
        "id": "C",
        "text": "One mole of nitrogen reacts with three moles of hydrogen to form two moles of ammonia."
      },
      {
        "id": "D",
        "text": "One atom of nitrogen reacts with three atoms of hydrogen to form two atoms of ammonia."
      }
    ],
    "answer": "C",
    "explanation": "The coefficients represent moles: 1 mole of nitrogen reacts with 3 moles of hydrogen to form 2 moles of ammonia."
  },
  {
    "id": "ch12-q3",
    "chapter": "Chapter 12",
    "sourceNumber": 3,
    "prompt": "Calculate the mass of the reactants and products for the combustion of hydrogen: 2H 2 (g) + O 2 (g) → 2H 2 O(g). Which statement best demonstrates that the balanced equation obeys the law of conservation of mass?",
    "options": [
      {
        "id": "A",
        "text": "4.0 g of reactants produces 32.0 g of products."
      },
      {
        "id": "B",
        "text": "36.0 g of reactants (4.0 g H 2 + 32.0 g O 2 ) produces 36.0 g of H 2 O."
      },
      {
        "id": "C",
        "text": "18.0 g of reactants produces 18.0 g of products."
      },
      {
        "id": "D",
        "text": "36.0 g of reactants produces 2.0 g of H 2 and 16.0 g of O 2."
      }
    ],
    "answer": "B",
    "explanation": "The mass of the reactants (4.0 g H2 + 32.0 g O2) equals the mass of the products (36.0 g H2O)."
  },
  {
    "id": "ch12-q4",
    "chapter": "Chapter 12",
    "sourceNumber": 4,
    "prompt": "Which of the following best explains the term \"mole ratio\" and when it is used?",
    "options": [
      {
        "id": "A",
        "text": "A ratio of the molar masses of two substances, used to calculate volume."
      },
      {
        "id": "B",
        "text": "A conversion factor derived from the coefficients of a balanced chemical equation interpreted in terms of moles."
      },
      {
        "id": "C",
        "text": "A ratio of the subscripts in a chemical formula, used to determine empirical formulas."
      },
      {
        "id": "D",
        "text": "A ratio of actual yield to theoretical yield, used to measure efficiency."
      }
    ],
    "answer": "B",
    "explanation": "A mole ratio is a conversion factor derived directly from the coefficients of a balanced chemical equation."
  },
  {
    "id": "ch12-q5",
    "chapter": "Chapter 12",
    "sourceNumber": 5,
    "prompt": "Ammonia is produced by the reaction of nitrogen and hydrogen: N 2 (g) + 3H 2 (g) → 2NH 3 (g). How many moles of NH 3 form when 6.0 mol of H 2 reacts completely?",
    "options": [
      {
        "id": "A",
        "text": "2.0 mol"
      },
      {
        "id": "B",
        "text": "4.0 mol"
      },
      {
        "id": "C",
        "text": "6.0 mol"
      },
      {
        "id": "D",
        "text": "9.0 mol"
      }
    ],
    "answer": "B",
    "explanation": "Using the 3:2 molar ratio from the balanced equation, 6.0 mol H2 × (2 mol NH3 / 3 mol H2) = 4.0 mol NH3."
  },
  {
    "id": "ch12-q6",
    "chapter": "Chapter 12",
    "sourceNumber": 6,
    "prompt": "Ethanol (C 2 H 5 OH) burns in oxygen to produce carbon dioxide and water: C 2 H 5 OH(l) + 3O 2 (g) → 2CO 2 (g) + 3H 2 O(g). How many grams of O 2 are needed to produce 4.00 mol of CO 2?",
    "options": [
      {
        "id": "A",
        "text": "96.0 g"
      },
      {
        "id": "B",
        "text": "144 g"
      },
      {
        "id": "C",
        "text": "192 g"
      },
      {
        "id": "D",
        "text": "288 g"
      }
    ],
    "answer": "C",
    "explanation": "Using the 3:2 ratio from the equation, 4.00 mol CO2 requires 6.00 mol O2. The molar mass of O2 is 32.0 g/mol, so 6.00 mol × 32.0 g/mol = 192 g."
  },
  {
    "id": "ch12-q7",
    "chapter": "Chapter 12",
    "sourceNumber": 7,
    "prompt": "The combustion of methane produces carbon dioxide and water: CH 4 (g) + 2O 2 (g) → CO 2 (g) + 2H 2 O(g). If you have 48.0 g of CH 4, how many grams of O 2 are required for a complete reaction?",
    "options": [
      {
        "id": "A",
        "text": "64.0 g"
      },
      {
        "id": "B",
        "text": "96.0 g"
      },
      {
        "id": "C",
        "text": "128 g"
      },
      {
        "id": "D",
        "text": "192 g"
      }
    ],
    "answer": "D",
    "explanation": "48.0 g CH4 ÷ 16.0 g/mol = 3.0 mol CH4. The ratio of CH4 to O2 is 1:2, requiring 6.0 mol O2. 6.0 mol × 32.0 g/mol = 192 g."
  },
  {
    "id": "ch12-q8",
    "chapter": "Chapter 12",
    "sourceNumber": 8,
    "prompt": "What information about a chemical reaction is derived from the coefficients in a balanced equation?",
    "options": [
      {
        "id": "A",
        "text": "The physical states of the reactants and products."
      },
      {
        "id": "B",
        "text": "The relative number of moles (or particles) of reactants and products."
      },
      {
        "id": "C",
        "text": "The rate at which the reaction occurs."
      },
      {
        "id": "D",
        "text": "The amount of energy released or absorbed."
      }
    ],
    "answer": "B",
    "explanation": "Coefficients specifically indicate the relative number of moles or particles for reactants and products."
  },
  {
    "id": "ch12-q9",
    "chapter": "Chapter 12",
    "sourceNumber": 9,
    "prompt": "Sodium metal reacts with water to form aqueous sodium hydroxide and hydrogen gas: 2Na(s) + 2H 2 O(l) → 2NaOH(aq) + H 2 (g). What mass of water is needed to react completely with 46.0 g of Na?",
    "options": [
      {
        "id": "A",
        "text": "18.0 g"
      },
      {
        "id": "B",
        "text": "36.0 g"
      },
      {
        "id": "C",
        "text": "72.0 g"
      },
      {
        "id": "D",
        "text": "92.0 g"
      }
    ],
    "answer": "B",
    "explanation": "46.0 g Na ÷ 23.0 g/mol = 2.0 mol Na. The Na to H2O ratio is 2:2, meaning 2.0 mol H2O are needed. 2.0 mol × 18.0 g/mol = 36.0 g."
  },
  {
    "id": "ch12-q10",
    "chapter": "Chapter 12",
    "sourceNumber": 10,
    "prompt": "Which term describes that portion of chemistry dealing with numerical relationships in chemical reactions; the calculation of quantities of substances involved in chemical equations?",
    "options": [
      {
        "id": "A",
        "text": "Actual yield"
      },
      {
        "id": "B",
        "text": "Stoichiometry"
      },
      {
        "id": "C",
        "text": "Percent yield"
      },
      {
        "id": "D",
        "text": "Mole ratio"
      }
    ],
    "answer": "B",
    "explanation": "Stoichiometry is the portion of chemistry that calculates numerical quantities in chemical equations."
  },
  {
    "id": "ch12-q11",
    "chapter": "Chapter 12",
    "sourceNumber": 11,
    "prompt": "What is the significance of the limiting reagent in a chemical reaction?",
    "options": [
      {
        "id": "A",
        "text": "It determines the maximum amount of product that can be formed."
      },
      {
        "id": "B",
        "text": "It is the reactant that is left over after the reaction stops."
      },
      {
        "id": "C",
        "text": "It speeds up the rate of the chemical reaction."
      },
      {
        "id": "D",
        "text": "It indicates that the theoretical yield will be 100%."
      }
    ],
    "answer": "A",
    "explanation": "The limiting reagent dictates the maximum possible amount of product that can be formed."
  },
  {
    "id": "ch12-q12",
    "chapter": "Chapter 12",
    "sourceNumber": 12,
    "prompt": "How would you identify a limiting reagent in a chemical reaction?",
    "options": [
      {
        "id": "A",
        "text": "Find the reactant with the lowest starting mass."
      },
      {
        "id": "B",
        "text": "Find the reactant with the lowest coefficient in the balanced equation."
      },
      {
        "id": "C",
        "text": "Express quantities of reactants as moles and compare them to the mole ratios from the balanced equation."
      },
      {
        "id": "D",
        "text": "Express quantities as volumes and find the smallest volume."
      }
    ],
    "answer": "C",
    "explanation": "Identification requires expressing quantities as moles and comparing them against the balanced mole ratios."
  },
  {
    "id": "ch12-q13",
    "chapter": "Chapter 12",
    "sourceNumber": 13,
    "prompt": "In a reaction chamber, 4.0 mol of nitrogen (N 2 ) is mixed with 9.0 mol of hydrogen (H 2 ) to produce ammonia: N 2 (g) + 3H 2 (g) → 2NH 3 (g). Identify the limiting reagent and calculate the number of moles of product formed.",
    "options": [
      {
        "id": "A",
        "text": "N 2 is limiting; 8.0 mol NH 3 forms."
      },
      {
        "id": "B",
        "text": "H 2 is limiting; 6.0 mol NH 3 forms."
      },
      {
        "id": "C",
        "text": "N 2 is limiting; 4.0 mol NH 3 forms."
      },
      {
        "id": "D",
        "text": "H 2 is limiting; 9.0 mol NH 3 forms."
      }
    ],
    "answer": "B",
    "explanation": "9.0 mol H2 requires 3.0 mol N2, leaving N2 in excess, so H2 is limiting. 9.0 mol H2 × (2/3) = 6.0 mol NH3."
  },
  {
    "id": "ch12-q14",
    "chapter": "Chapter 12",
    "sourceNumber": 14,
    "prompt": "Heating calcium carbonate produces calcium oxide and carbon dioxide: CaCO 3 (s) → CaO(s) + CO 2 (g). When 50.0 g of CaCO 3 is heated, 22.4 g of CaO is produced. Assuming a theoretical yield of 28.0 g CaO, what is the percent yield of this reaction?",
    "options": [
      {
        "id": "A",
        "text": "44.8%"
      },
      {
        "id": "B",
        "text": "50.0%"
      },
      {
        "id": "C",
        "text": "80.0%"
      },
      {
        "id": "D",
        "text": "89.2%"
      }
    ],
    "answer": "C",
    "explanation": "Percent yield = (Actual Yield / Theoretical Yield) × 100. (22.4 g / 28.0 g) × 100 = 80.0%."
  },
  {
    "id": "ch12-q15",
    "chapter": "Chapter 12",
    "sourceNumber": 15,
    "prompt": "What is the amount of product that forms when a reaction is carried out in the laboratory?",
    "options": [
      {
        "id": "A",
        "text": "Actual yield"
      },
      {
        "id": "B",
        "text": "Theoretical yield"
      },
      {
        "id": "C",
        "text": "Limiting reagent"
      },
      {
        "id": "D",
        "text": "Excess reagent"
      }
    ],
    "answer": "A",
    "explanation": "Actual yield is defined as the amount formed during laboratory execution."
  },
  {
    "id": "ch12-q16",
    "chapter": "Chapter 12",
    "sourceNumber": 16,
    "prompt": "Which of the following is any reactant that is used up first in a chemical reaction?",
    "options": [
      {
        "id": "A",
        "text": "Excess reagent"
      },
      {
        "id": "B",
        "text": "Solute"
      },
      {
        "id": "C",
        "text": "Limiting reagent"
      },
      {
        "id": "D",
        "text": "Catalyst"
      }
    ],
    "answer": "C",
    "explanation": "The limiting reagent is the reactant that is entirely consumed first."
  },
  {
    "id": "ch12-q17",
    "chapter": "Chapter 12",
    "sourceNumber": 17,
    "prompt": "How is percent yield defined?",
    "options": [
      {
        "id": "A",
        "text": "The amount of product that could form during a reaction calculated from a balanced chemical equation."
      },
      {
        "id": "B",
        "text": "A conversion factor derived from the coefficients of a balanced chemical equation."
      },
      {
        "id": "C",
        "text": "The ratio of the actual yield to the theoretical yield for a chemical reaction expressed as a percentage; a measure of the efficiency of a reaction."
      },
      {
        "id": "D",
        "text": "A reagent present in a quantity that is more than sufficient to react with a limiting reagent."
      }
    ],
    "answer": "C",
    "explanation": "Percent yield is the ratio of actual yield to theoretical yield, acting as a measure of Question Answer Justification / Calculation reaction efficiency."
  },
  {
    "id": "ch12-q18",
    "chapter": "Chapter 12",
    "sourceNumber": 18,
    "prompt": "Which term refers to the amount of product that could form during a reaction calculated from a balanced chemical equation, representing the maximum amount of product that could be formed from a given amount of reactant?",
    "options": [
      {
        "id": "A",
        "text": "Actual yield"
      },
      {
        "id": "B",
        "text": "Excess reagent"
      },
      {
        "id": "C",
        "text": "Percent yield"
      },
      {
        "id": "D",
        "text": "Theoretical yield"
      }
    ],
    "answer": "D",
    "explanation": "Theoretical yield represents the maximum calculated product from a given reactant."
  },
  {
    "id": "ch14-q1",
    "chapter": "Chapter 14",
    "sourceNumber": 1,
    "prompt": "When a sample of gas is compressed, what occurs at the particulate level?",
    "options": [
      {
        "id": "A",
        "text": "The particles themselves shrink in volume."
      },
      {
        "id": "B",
        "text": "The space between the particles is reduced."
      },
      {
        "id": "C",
        "text": "The kinetic energy of the particles decreases."
      },
      {
        "id": "D",
        "text": "The mass of the gas particles decreases."
      }
    ],
    "answer": "B",
    "explanation": "Compression specifically reduces the space between the gas particles."
  },
  {
    "id": "ch14-q2",
    "chapter": "Chapter 14",
    "sourceNumber": 2,
    "prompt": "Why does heating a contained gas at a constant volume cause an increase in pressure?",
    "options": [
      {
        "id": "A",
        "text": "The heat creates more gas particles inside the container."
      },
      {
        "id": "B",
        "text": "The volume of the container expands slightly to accommodate the heat."
      },
      {
        "id": "C",
        "text": "The increased kinetic energy of the particles causes more frequent and forceful collisions."
      },
      {
        "id": "D",
        "text": "The gas molecules break apart into smaller atoms, increasing the number of collisions."
      }
    ],
    "answer": "C",
    "explanation": "Increased kinetic energy at a constant volume causes more frequent and forceful particle collisions."
  },
  {
    "id": "ch14-q3",
    "chapter": "Chapter 14",
    "sourceNumber": 3,
    "prompt": "What happens to the volume of a balloon when it is moved from a warm room to the freezing outdoors, and why?",
    "options": [
      {
        "id": "A",
        "text": "The volume decreases because the molecules have less kinetic energy and exert less pressure on the inside of the balloon."
      },
      {
        "id": "B",
        "text": "The volume increases because cold air exerts less external atmospheric pressure."
      },
      {
        "id": "C",
        "text": "The volume remains the same, but the walls of the balloon become rigid."
      },
      {
        "id": "D",
        "text": "The volume increases because gas particles naturally expand in colder temperatures."
      }
    ],
    "answer": "A",
    "explanation": "Moving to freezing temperatures lowers kinetic energy, exerting less pressure on the balloon walls, causing volume to decrease."
  },
  {
    "id": "ch14-q4",
    "chapter": "Chapter 14",
    "sourceNumber": 4,
    "prompt": "A rigid steel tank contains 2.0 moles of oxygen gas. If another 4.0 moles of oxygen gas is added while the temperature and volume remain constant, what happens to the pressure?",
    "options": [
      {
        "id": "A",
        "text": "The pressure remains the same."
      },
      {
        "id": "B",
        "text": "The pressure doubles."
      },
      {
        "id": "C",
        "text": "The pressure triples."
      },
      {
        "id": "D",
        "text": "The pressure decreases by a third."
      }
    ],
    "answer": "C",
    "explanation": "Adding 4.0 moles to the existing 2.0 moles brings the total to 6.0 moles (tripling the amount). At constant volume and temperature, pressure triples."
  },
  {
    "id": "ch14-q5",
    "chapter": "Chapter 14",
    "sourceNumber": 5,
    "prompt": "If a gas is compressed from 10.0 L to 2.0 L at a constant temperature, what happens to the pressure?",
    "options": [
      {
        "id": "A",
        "text": "It becomes one-fifth of the original pressure."
      },
      {
        "id": "B",
        "text": "It doubles."
      },
      {
        "id": "C",
        "text": "It quintuples."
      },
      {
        "id": "D",
        "text": "It is reduced by half."
      }
    ],
    "answer": "C",
    "explanation": "Volume is reduced by a factor of 5 (10.0 L to 2.0 L). Following Boyle's Law, pressure quintuples."
  },
  {
    "id": "ch14-q6",
    "chapter": "Chapter 14",
    "sourceNumber": 6,
    "prompt": "Why does gas pressure decrease when gas is slowly removed from a container with a fixed volume?",
    "options": [
      {
        "id": "A",
        "text": "The remaining particles expand to fill the missing mass."
      },
      {
        "id": "B",
        "text": "There is a decrease in the number of particle collisions with the container walls."
      },
      {
        "id": "C",
        "text": "The temperature of the gas automatically drops."
      },
      {
        "id": "D",
        "text": "The kinetic energy of the remaining particles increases to compensate."
      }
    ],
    "answer": "B",
    "explanation": "Removing gas reduces the total number of particle collisions against the container walls."
  },
  {
    "id": "ch14-q7",
    "chapter": "Chapter 14",
    "sourceNumber": 7,
    "prompt": "Which of the following is the correct mathematical equation for Charles's law?",
    "options": [
      {
        "id": "A",
        "text": "P ₁ V ₁ = P ₂ V ₂"
      },
      {
        "id": "B",
        "text": "V ₁ /T ₁ = V ₂ /T ₂"
      },
      {
        "id": "C",
        "text": "P ₁ /T ₁ = P ₂ /T ₂"
      },
      {
        "id": "D",
        "text": "PV = nRT"
      }
    ],
    "answer": "B",
    "explanation": "Charles's Law mathematically relates volume and temperature: V1/T1=V2/T2."
  },
  {
    "id": "ch14-q8",
    "chapter": "Chapter 14",
    "sourceNumber": 8,
    "prompt": "The gas in a closed container has a pressure of 4.00 x 10² kPa at 400 K. What will the pressure be if the temperature is lowered to 200 K?",
    "options": [
      {
        "id": "A",
        "text": "1.00 x 10² kPa"
      },
      {
        "id": "B",
        "text": "2.00 x 10² kPa"
      },
      {
        "id": "C",
        "text": "4.00 x 10² kPa"
      },
      {
        "id": "D",
        "text": "8.00 x 10² kPa"
      }
    ],
    "answer": "B",
    "explanation": "Applying Gay-Lussac's law, halving the temperature (400 K to 200 K) halves the pressure to 2.00 × 10^2 kPa."
  },
  {
    "id": "ch14-q9",
    "chapter": "Chapter 14",
    "sourceNumber": 9,
    "prompt": "Calculate the initial volume of a gas at a pressure of 2.00 x 10² kPa if its final volume is 4.00 L at a pressure of 1.50 x 10² kPa. (Assume constant temperature).",
    "options": [
      {
        "id": "A",
        "text": "3.00 L"
      },
      {
        "id": "B",
        "text": "4.00 L"
      },
      {
        "id": "C",
        "text": "5.33 L"
      },
      {
        "id": "D",
        "text": "6.00 L"
      }
    ],
    "answer": "A",
    "explanation": "Using Boyle's Law (P1V1=P2V2), V1 = (1.50 × 10^2 × 4.00) / (2.00 × 10^2) = 3.00 L. Question Answer Justification / Calculation"
  },
  {
    "id": "ch14-q10",
    "chapter": "Chapter 14",
    "sourceNumber": 10,
    "prompt": "A gas with a volume of 2.0 L at 100.0 kPa expands until the pressure drops to 25.0 kPa. What is its new volume if the temperature doesn't change?",
    "options": [
      {
        "id": "A",
        "text": "0.50 L"
      },
      {
        "id": "B",
        "text": "4.0 L"
      },
      {
        "id": "C",
        "text": "8.0 L"
      },
      {
        "id": "D",
        "text": "10.0 L"
      }
    ],
    "answer": "C",
    "explanation": "Using Boyle's Law, as pressure drops by a factor of 4 (100.0 kPa to 25.0 kPa), volume increases by a factor of 4 (2.0 L × 4 = 8.0 L)."
  },
  {
    "id": "ch14-q11",
    "chapter": "Chapter 14",
    "sourceNumber": 11,
    "prompt": "A gas with an initial volume of 400 mL at 300 K is heated until its volume reaches 1200 mL. What is the new temperature of the gas if the pressure remains constant?",
    "options": [
      {
        "id": "A",
        "text": "100 K"
      },
      {
        "id": "B",
        "text": "600 K"
      },
      {
        "id": "C",
        "text": "900 K"
      },
      {
        "id": "D",
        "text": "1200 K"
      }
    ],
    "answer": "C",
    "explanation": "Using Charles's Law, tripling the volume (400 mL to 1200 mL) requires tripling the temperature (300 K × 3 = 900 K)."
  },
  {
    "id": "ch14-q12",
    "chapter": "Chapter 14",
    "sourceNumber": 12,
    "prompt": "Which of the following represents the combined gas law?",
    "options": [
      {
        "id": "A",
        "text": "P ₁ V ₁ = P ₂ V ₂"
      },
      {
        "id": "B",
        "text": "V ₁ /T ₁ = V ₂ /T ₂"
      },
      {
        "id": "C",
        "text": "(P ₁ V ₁ )/T ₁ = (P ₂ V ₂ )/T ₂"
      },
      {
        "id": "D",
        "text": "Ptotal = P ₁ + P ₂ + P ₃"
      }
    ],
    "answer": "C",
    "explanation": "The combined gas law formula is (P1V1)/T1=(P2V2)/T2."
  },
  {
    "id": "ch14-q13",
    "chapter": "Chapter 14",
    "sourceNumber": 13,
    "prompt": "A sealed cylinder contains nitrogen gas at a pressure of 1.50 x 10² kPa and a temperature of 300 K. If the temperature increases to 400 K, what is the new pressure in the cylinder?",
    "options": [
      {
        "id": "A",
        "text": "1.00 x 10² kPa"
      },
      {
        "id": "B",
        "text": "2.00 x 10² kPa"
      },
      {
        "id": "C",
        "text": "3.00 x 10² kPa"
      },
      {
        "id": "D",
        "text": "4.50 x 10² kPa"
      }
    ],
    "answer": "B",
    "explanation": "Using Gay-Lussac's Law, P2 = P1 × (T2/T1) = 1.50 × 10^2 × (400/300) = 2.00 × 10^2 kPa."
  },
  {
    "id": "ch14-q14",
    "chapter": "Chapter 14",
    "sourceNumber": 14,
    "prompt": "How can Gay-Lussac's law be derived from the combined gas law?",
    "options": [
      {
        "id": "A",
        "text": "By assuming temperature is constant, the T terms cancel out."
      },
      {
        "id": "B",
        "text": "By assuming volume is constant, so the V ₁ and V ₂ terms cancel out."
      },
      {
        "id": "C",
        "text": "By assuming pressure is constant, so the P ₁ and P ₂ terms cancel out."
      },
      {
        "id": "D",
        "text": "By assuming the number of moles is constant."
      }
    ],
    "answer": "B",
    "explanation": "Gay-Lussac's law assumes constant volume, so the V1 and V2 terms cancel out of the combined gas law."
  },
  {
    "id": "ch14-q15",
    "chapter": "Chapter 14",
    "sourceNumber": 15,
    "prompt": "Which of the following correctly describes an ideal gas?",
    "options": [
      {
        "id": "A",
        "text": "Its particles have measurable volume and strong intermolecular attractions."
      },
      {
        "id": "B",
        "text": "It condenses into a liquid at absolute zero."
      },
      {
        "id": "C",
        "text": "Its particles have no volume, there are no attractions between them, and collisions are perfectly elastic."
      },
      {
        "id": "D",
        "text": "It perfectly follows the gas laws only at extremely low temperatures and high pressures."
      }
    ],
    "answer": "C",
    "explanation": "An ideal gas is defined by having no volume, perfectly elastic collisions, and no molecular attractions."
  },
  {
    "id": "ch14-q16",
    "chapter": "Chapter 14",
    "sourceNumber": 16,
    "prompt": "Why is it impossible for a truly ideal gas to exist?",
    "options": [
      {
        "id": "A",
        "text": "Because all real gas particles have a finite volume and experience attractive forces."
      },
      {
        "id": "B",
        "text": "Because collisions between gas molecules always result in a loss of total kinetic energy."
      },
      {
        "id": "C",
        "text": "Because real gases cannot be compressed."
      },
      {
        "id": "D",
        "text": "Because real gases do not exhibit predictable mathematical behaviors."
      }
    ],
    "answer": "A",
    "explanation": "Truly ideal gases do not exist because real particles have finite volume and experience attractive forces."
  },
  {
    "id": "ch14-q17",
    "chapter": "Chapter 14",
    "sourceNumber": 17,
    "prompt": "What is the volume occupied by 2.00 mol of a gas at 300 K if the pressure is 100.0 kPa? (R = 8.31 (L·kPa)/(K·mol))",
    "options": [
      {
        "id": "A",
        "text": "24.9 L"
      },
      {
        "id": "B",
        "text": "33.2 L"
      },
      {
        "id": "C",
        "text": "49.9 L"
      },
      {
        "id": "D",
        "text": "66.4 L"
      }
    ],
    "answer": "C",
    "explanation": "Using PV=nRT, V = (2.00 × 8.31 × 300) / 100.0 = 49.86 L (rounds to 49.9 L)."
  },
  {
    "id": "ch14-q18",
    "chapter": "Chapter 14",
    "sourceNumber": 18,
    "prompt": "What volume will 14.0 g of nitrogen gas (N ₂ ) occupy at 300 K and a pressure of 50.0 kPa?",
    "options": [
      {
        "id": "A",
        "text": "12.5 L"
      },
      {
        "id": "B",
        "text": "24.9 L"
      },
      {
        "id": "C",
        "text": "49.9 L"
      },
      {
        "id": "D",
        "text": "83.1 L"
      }
    ],
    "answer": "B",
    "explanation": "14.0 g N2 = 0.500 mol. V = (0.500 × 8.31 × 300) / 50.0 = 24.93 L."
  },
  {
    "id": "ch14-q19",
    "chapter": "Chapter 14",
    "sourceNumber": 19,
    "prompt": "If 8.00 g of helium gas (He) is in a 4.00-L container at 400 K, what is the pressure in the container?",
    "options": [
      {
        "id": "A",
        "text": "8.31 x 10² kPa"
      },
      {
        "id": "B",
        "text": "1.66 x 10³ kPa"
      },
      {
        "id": "C",
        "text": "3.32 x 10³ kPa"
      },
      {
        "id": "D",
        "text": "6.64 x 10³ kPa"
      }
    ],
    "answer": "B",
    "explanation": "8.00 g He = 2.00 mol. P = (2.00 × 8.31 × 400) / 4.00 = 1662 kPa or 1.66 × 10^3 kPa."
  },
  {
    "id": "ch14-q20",
    "chapter": "Chapter 14",
    "sourceNumber": 20,
    "prompt": "A balloon has a volume of 1.00 x 10² L at 200.0 kPa pressure and a temperature of 300 K. What is the approximate mass of argon gas (Ar) inside the balloon?",
    "options": [
      {
        "id": "A",
        "text": "8.0 x 10¹ g"
      },
      {
        "id": "B",
        "text": "1.6 x 10² g"
      },
      {
        "id": "C",
        "text": "3.2 x 10² g"
      },
      {
        "id": "D",
        "text": "6.4 x 10² g"
      }
    ],
    "answer": "C",
    "explanation": "n = (200.0 × 1.00 × 10^2) / (8.31 × 300) = 8.02 mol. 8.02 mol × 39.95 g/mol = 320 g or 3.2 × 10^2 g."
  },
  {
    "id": "ch14-q21",
    "chapter": "Chapter 14",
    "sourceNumber": 21,
    "prompt": "Which statement best describes Dalton's law of partial pressures?",
    "options": [
      {
        "id": "A",
        "text": "The volume of a mixture of gases equals the sum of the individual volumes."
      },
      {
        "id": "B",
        "text": "At constant volume and temperature, the total pressure of a gas mixture is equal to the sum of the partial pressures of the component gases."
      },
      {
        "id": "C",
        "text": "The rate of effusion of a gas is inversely proportional to its molar mass."
      },
      {
        "id": "D",
        "text": "Gas pressure is directly proportional to temperature in a rigid container."
      }
    ],
    "answer": "B",
    "explanation": "Dalton's law states total pressure is the sum of individual partial pressures at constant volume and temperature."
  },
  {
    "id": "ch14-q22",
    "chapter": "Chapter 14",
    "sourceNumber": 22,
    "prompt": "Which gas effuses faster, helium (He) or neon (Ne), and by approximately what factor?",
    "options": [
      {
        "id": "A",
        "text": "Helium effuses faster by a factor of 2.25."
      },
      {
        "id": "B",
        "text": "Neon effuses faster by a factor of 2.25."
      },
      {
        "id": "C",
        "text": "Helium effuses faster by a factor of 5.0."
      },
      {
        "id": "D",
        "text": "Neon effuses faster by a factor of 5.0."
      }
    ],
    "answer": "A",
    "explanation": "Helium (4.00 g/mol) effuses faster than Neon (20.18 g/mol). Ratio = √(20.18/4.00) ≈ 2.25."
  },
  {
    "id": "ch14-q23",
    "chapter": "Chapter 14",
    "sourceNumber": 23,
    "prompt": "Which gas will effuse faster at the same temperature: carbon dioxide (CO ₂ ) or molecular nitrogen (N ₂ )?",
    "options": [
      {
        "id": "A",
        "text": "Carbon dioxide, because it has a higher molar mass."
      },
      {
        "id": "B",
        "text": "Molecular nitrogen, because it has a lower molar mass."
      },
      {
        "id": "C",
        "text": "They will effuse at the same rate."
      },
      {
        "id": "D",
        "text": "It depends on the size of the container."
      }
    ],
    "answer": "B",
    "explanation": "Molecular nitrogen (28.0 g/mol) effuses faster than carbon dioxide (44.0 g/mol) due to lower molar mass."
  },
  {
    "id": "ch14-q24",
    "chapter": "Chapter 14",
    "sourceNumber": 24,
    "prompt": "Calculate the approximate ratio of the velocity of hydrogen molecules (H ₂ ) to the velocity of oxygen molecules (O ₂ ) at the same temperature.",
    "options": [
      {
        "id": "A",
        "text": "1:4"
      },
      {
        "id": "B",
        "text": "2:1"
      },
      {
        "id": "C",
        "text": "4:1"
      },
      {
        "id": "D",
        "text": "16:1"
      }
    ],
    "answer": "C",
    "explanation": "Ratio = √(32/2) = √16 = 4, yielding a 4:1 ratio."
  },
  {
    "id": "ch14-q25",
    "chapter": "Chapter 14",
    "sourceNumber": 25,
    "prompt": "Calculate the approximate ratio of the velocity of helium atoms (He) to the velocity of argon atoms (Ar) at the same temperature.",
    "options": [
      {
        "id": "A",
        "text": "3.16:1"
      },
      {
        "id": "B",
        "text": "1:3.16"
      },
      {
        "id": "C",
        "text": "10:1"
      },
      {
        "id": "D",
        "text": "1:10"
      }
    ],
    "answer": "A",
    "explanation": "Ratio = √(40/4) = √10 ≈ 3.16:1."
  },
  {
    "id": "ch14-q26",
    "chapter": "Chapter 14",
    "sourceNumber": 26,
    "prompt": "Which term describes the measure of how much the volume of matter decreases under pressure?",
    "options": [
      {
        "id": "A",
        "text": "Diffusion"
      },
      {
        "id": "B",
        "text": "Compressibility"
      },
      {
        "id": "C",
        "text": "Effusion"
      },
      {
        "id": "D",
        "text": "Partial pressure"
      }
    ],
    "answer": "B",
    "explanation": "Compressibility is the measure of how volume decreases under pressure."
  },
  {
    "id": "ch14-q27",
    "chapter": "Chapter 14",
    "sourceNumber": 27,
    "prompt": "Which law states that for a given mass of gas at constant temperature, the volume varies inversely with pressure?",
    "options": [
      {
        "id": "A",
        "text": "Charles's law"
      },
      {
        "id": "B",
        "text": "Gay-Lussac's law"
      },
      {
        "id": "C",
        "text": "Boyle's law"
      },
      {
        "id": "D",
        "text": "Graham's law of effusion"
      }
    ],
    "answer": "C",
    "explanation": "Boyle's law describes the inverse relationship between volume and pressure."
  },
  {
    "id": "ch14-q28",
    "chapter": "Chapter 14",
    "sourceNumber": 28,
    "prompt": "Which law states that the volume of a fixed mass of gas is directly proportional to its Kelvin temperature if the pressure is kept constant?",
    "options": [
      {
        "id": "A",
        "text": "Boyle's law"
      },
      {
        "id": "B",
        "text": "Charles's law"
      },
      {
        "id": "C",
        "text": "Dalton's law"
      },
      {
        "id": "D",
        "text": "Combined gas law"
      }
    ],
    "answer": "B",
    "explanation": "Charles's law states volume is directly proportional to Kelvin temperature at constant pressure. Question Answer Justification / Calculation"
  },
  {
    "id": "ch14-q29",
    "chapter": "Chapter 14",
    "sourceNumber": 29,
    "prompt": "What do we call the relationship PV = nRT that describes the behavior of an ideal gas?",
    "options": [
      {
        "id": "A",
        "text": "Combined gas law"
      },
      {
        "id": "B",
        "text": "Gas law (ideal gas law)"
      },
      {
        "id": "C",
        "text": "Dalton's law of partial pressures"
      },
      {
        "id": "D",
        "text": "Gas constant"
      }
    ],
    "answer": "B",
    "explanation": "PV=nRT is known as the ideal gas law."
  },
  {
    "id": "ch14-q30",
    "chapter": "Chapter 14",
    "sourceNumber": 30,
    "prompt": "Which term defines the tendency of molecules to move toward areas of lower concentration until the concentration is uniform throughout?",
    "options": [
      {
        "id": "A",
        "text": "Compressibility"
      },
      {
        "id": "B",
        "text": "Diffusion"
      },
      {
        "id": "C",
        "text": "Effusion"
      },
      {
        "id": "D",
        "text": "Partial pressure"
      }
    ],
    "answer": "B",
    "explanation": "Diffusion is the tendency of molecules to move toward lower concentration areas."
  },
  {
    "id": "ch14-q31",
    "chapter": "Chapter 14",
    "sourceNumber": 31,
    "prompt": "Which term defines the process that occurs when a gas escapes through a tiny hole in its container?",
    "options": [
      {
        "id": "A",
        "text": "Diffusion"
      },
      {
        "id": "B",
        "text": "Compressibility"
      },
      {
        "id": "C",
        "text": "Evaporation"
      },
      {
        "id": "D",
        "text": "Effusion"
      }
    ],
    "answer": "D",
    "explanation": "Effusion is gas escaping through a tiny hole in its container."
  },
  {
    "id": "ch14-q32",
    "chapter": "Chapter 14",
    "sourceNumber": 32,
    "prompt": "Which law states that the rate of effusion of a gas is inversely proportional to the square root of its molar mass?",
    "options": [
      {
        "id": "A",
        "text": "Graham's law of effusion"
      },
      {
        "id": "B",
        "text": "Dalton's law of partial pressures"
      },
      {
        "id": "C",
        "text": "Boyle's law"
      },
      {
        "id": "D",
        "text": "Gay-Lussac's law"
      }
    ],
    "answer": "A",
    "explanation": "Graham's law relates the rate of effusion to the inverse square root of molar mass."
  },
  {
    "id": "ch14-q33",
    "chapter": "Chapter 14",
    "sourceNumber": 33,
    "prompt": "What is the term for the contribution each individual gas makes to the total pressure of a mixture?",
    "options": [
      {
        "id": "A",
        "text": "Compressibility"
      },
      {
        "id": "B",
        "text": "Gas constant"
      },
      {
        "id": "C",
        "text": "Partial pressure"
      },
      {
        "id": "D",
        "text": "Diffusion"
      }
    ],
    "answer": "C",
    "explanation": "Partial pressure is the individual contribution of a gas to total pressure."
  },
  {
    "id": "ch15-q1",
    "chapter": "Chapter 15",
    "sourceNumber": 1,
    "prompt": "What primarily causes the inward pull that minimizes the surface area of water?",
    "options": [
      {
        "id": "A",
        "text": "Metallic bonding"
      },
      {
        "id": "B",
        "text": "Strong hydrogen bonding"
      },
      {
        "id": "C",
        "text": "Ionic attractions"
      },
      {
        "id": "D",
        "text": "Dispersion forces"
      }
    ],
    "answer": "B",
    "explanation": "Strong hydrogen bonding creates the inward pull minimizing surface area."
  },
  {
    "id": "ch15-q2",
    "chapter": "Chapter 15",
    "sourceNumber": 2,
    "prompt": "Why is the behavior of surface water molecules different from those deep within the liquid?",
    "options": [
      {
        "id": "A",
        "text": "They form ionic bonds with the air."
      },
      {
        "id": "B",
        "text": "They possess a higher kinetic energy."
      },
      {
        "id": "C",
        "text": "Surface molecules are attracted to the liquid molecules below but not to the air above."
      },
      {
        "id": "D",
        "text": "They are repelled by the liquid molecules below them."
      }
    ],
    "answer": "C",
    "explanation": "Surface molecules are attracted to liquid below but not the air above."
  },
  {
    "id": "ch15-q4",
    "chapter": "Chapter 15",
    "sourceNumber": 4,
    "prompt": "How does a wetting agent, like soap, act as a surfactant?",
    "options": [
      {
        "id": "A",
        "text": "It creates a stable suspension."
      },
      {
        "id": "B",
        "text": "It increases the boiling point of the solution."
      },
      {
        "id": "C",
        "text": "It increases surface tension by strengthening bonds."
      },
      {
        "id": "D",
        "text": "It interferes with hydrogen bonding between water molecules and reduces surface tension."
      }
    ],
    "answer": "D",
    "explanation": "Surfactants interfere with hydrogen bonding, ultimately reducing surface tension. Question Answer Justification / Calculation"
  },
  {
    "id": "ch15-q5",
    "chapter": "Chapter 15",
    "sourceNumber": 5,
    "prompt": "The low tendency for water molecules to escape from the liquid phase explains its unusually low vapor pressure. What causes this?",
    "options": [
      {
        "id": "A",
        "text": "High molar mass"
      },
      {
        "id": "B",
        "text": "Atmospheric pressure"
      },
      {
        "id": "C",
        "text": "Hydrogen bonds holding water molecules to each other"
      },
      {
        "id": "D",
        "text": "Covalent bonds between oxygen and hydrogen"
      }
    ],
    "answer": "C",
    "explanation": "Hydrogen bonds physically hold water molecules to each other, restricting escape."
  },
  {
    "id": "ch15-q6",
    "chapter": "Chapter 15",
    "sourceNumber": 6,
    "prompt": "Why do large bodies of water, like oceans and lakes, evaporate relatively slowly?",
    "options": [
      {
        "id": "A",
        "text": "High atmospheric pressure"
      },
      {
        "id": "B",
        "text": "High surface tension"
      },
      {
        "id": "C",
        "text": "High salinity levels"
      },
      {
        "id": "D",
        "text": "Water has a low vapor pressure."
      }
    ],
    "answer": "D",
    "explanation": "The slow evaporation rate is due to water's intrinsically low vapor pressure."
  },
  {
    "id": "ch15-q7",
    "chapter": "Chapter 15",
    "sourceNumber": 7,
    "prompt": "How does the molecular framework of ice compare to that of liquid water?",
    "options": [
      {
        "id": "A",
        "text": "Ice is a regular open framework of hydrogen-bonded water molecules arranged like a honeycomb."
      },
      {
        "id": "B",
        "text": "Ice has no hydrogen bonds between its molecules."
      },
      {
        "id": "C",
        "text": "Ice is a highly compressed, unstructured solid."
      },
      {
        "id": "D",
        "text": "Liquid water has a more rigid crystalline structure than ice."
      }
    ],
    "answer": "A",
    "explanation": "Ice forms a regular, open framework of hydrogen-bonded molecules."
  },
  {
    "id": "ch15-q8",
    "chapter": "Chapter 15",
    "sourceNumber": 8,
    "prompt": "If the solid form of water were denser than its liquid form, what would be a major consequence?",
    "options": [
      {
        "id": "A",
        "text": "Water would evaporate instantly."
      },
      {
        "id": "B",
        "text": "Ice would melt at a higher temperature."
      },
      {
        "id": "C",
        "text": "Oceans would boil."
      },
      {
        "id": "D",
        "text": "Bodies of water would freeze from the bottom up, killing many forms of aquatic life."
      }
    ],
    "answer": "D",
    "explanation": "If denser, ice would sink, causing aquatic bodies to freeze bottom-up and kill life."
  },
  {
    "id": "ch15-q9",
    "chapter": "Chapter 15",
    "sourceNumber": 9,
    "prompt": "What is the specific role of hydrogen bonds in solid ice?",
    "options": [
      {
        "id": "A",
        "text": "They force the water molecules into a dense, irregular shape."
      },
      {
        "id": "B",
        "text": "They break apart the water molecules."
      },
      {
        "id": "C",
        "text": "They hold the molecules in a regular, open structure."
      },
      {
        "id": "D",
        "text": "They increase the overall temperature of the ice."
      }
    ],
    "answer": "C",
    "explanation": "Hydrogen bonds hold ice molecules in a regular, open structure."
  },
  {
    "id": "ch15-q10",
    "chapter": "Chapter 15",
    "sourceNumber": 10,
    "prompt": "What specific characteristic defines an aqueous solution?",
    "options": [
      {
        "id": "A",
        "text": "It is a concentrated mixture."
      },
      {
        "id": "B",
        "text": "It conducts electricity purely as a liquid."
      },
      {
        "id": "C",
        "text": "It contains a dissolved gas."
      },
      {
        "id": "D",
        "text": "It is a solution that has water as the solvent."
      }
    ],
    "answer": "D",
    "explanation": "An aqueous solution strictly defines water as the solvent."
  },
  {
    "id": "ch15-q11",
    "chapter": "Chapter 15",
    "sourceNumber": 11,
    "prompt": "When mixing table sugar into water to create a solution, what are the respective roles of each substance?",
    "options": [
      {
        "id": "A",
        "text": "Both are solutes."
      },
      {
        "id": "B",
        "text": "Water is the solvent; sugar is the solute."
      },
      {
        "id": "C",
        "text": "Sugar is the solvent; water is the solute."
      },
      {
        "id": "D",
        "text": "Both are solvents."
      }
    ],
    "answer": "B",
    "explanation": "Water acts as the dissolving solvent; sugar is the dissolved solute."
  },
  {
    "id": "ch15-q12",
    "chapter": "Chapter 15",
    "sourceNumber": 12,
    "prompt": "Why do nonpolar compounds generally fail to dissolve in water?",
    "options": [
      {
        "id": "A",
        "text": "They form strong hydrogen bonds with water."
      },
      {
        "id": "B",
        "text": "Polar water molecules electrostatically attract ions and polar molecules, but nonpolar compounds are unaffected because they have no charges."
      },
      {
        "id": "C",
        "text": "They vaporize upon contact with water."
      },
      {
        "id": "D",
        "text": "They are too large to fit between water molecules."
      }
    ],
    "answer": "B",
    "explanation": "Nonpolar compounds lack charges and are unaffected by the electrostatic attraction of polar water."
  },
  {
    "id": "ch15-q13",
    "chapter": "Chapter 15",
    "sourceNumber": 13,
    "prompt": "Why is filtration an ineffective method for separating dissolved salt or sugar from water?",
    "options": [
      {
        "id": "A",
        "text": "The molecules and ions are smaller than the pores of the filter."
      },
      {
        "id": "B",
        "text": "The water dissolves the filter paper."
      },
      {
        "id": "C",
        "text": "The salt and sugar bond chemically to the filter."
      },
      {
        "id": "D",
        "text": "Solutions are too viscous to pass through a filter."
      }
    ],
    "answer": "A",
    "explanation": "The dissolved molecules and ions are smaller than standard filter pores."
  },
  {
    "id": "ch15-q14",
    "chapter": "Chapter 15",
    "sourceNumber": 14,
    "prompt": "What occurs during the process of solvation?",
    "options": [
      {
        "id": "A",
        "text": "The solvent chemically reacts with the solute."
      },
      {
        "id": "B",
        "text": "Solvent molecules evaporate quickly."
      },
      {
        "id": "C",
        "text": "Cations and anions become surrounded by solvent molecules."
      },
      {
        "id": "D",
        "text": "Cations and anions precipitate out of the solution."
      }
    ],
    "answer": "C",
    "explanation": "Solvation is the process of cations and anions becoming surrounded by solvent molecules."
  },
  {
    "id": "ch15-q15",
    "chapter": "Chapter 15",
    "sourceNumber": 15,
    "prompt": "Based on the rule of \"like dissolves like,\" which of the following substances will NOT dissolve appreciably in water?",
    "options": [
      {
        "id": "A",
        "text": "HCl (polar)"
      },
      {
        "id": "B",
        "text": "NaI (ionic)"
      },
      {
        "id": "C",
        "text": "NH3 (polar)"
      },
      {
        "id": "D",
        "text": "CH4 (nonpolar)"
      }
    ],
    "answer": "D",
    "explanation": "CH4 is nonpolar and will not appreciably dissolve in polar water."
  },
  {
    "id": "ch15-q16",
    "chapter": "Chapter 15",
    "sourceNumber": 16,
    "prompt": "Why does gasoline remain separated when mixed with water?",
    "options": [
      {
        "id": "A",
        "text": "Gasoline undergoes a chemical reaction with water."
      },
      {
        "id": "B",
        "text": "Water is polar, and gasoline is nonpolar."
      },
      {
        "id": "C",
        "text": "Gasoline is too dense to mix."
      },
      {
        "id": "D",
        "text": "Water is nonpolar, and gasoline is polar."
      }
    ],
    "answer": "B",
    "explanation": "Separation occurs because water is polar and gasoline is nonpolar."
  },
  {
    "id": "ch15-q17",
    "chapter": "Chapter 15",
    "sourceNumber": 17,
    "prompt": "For a solution to conduct an electric current, what must be present?",
    "options": [
      {
        "id": "A",
        "text": "Nonpolar molecules"
      },
      {
        "id": "B",
        "text": "Suspended particles"
      },
      {
        "id": "C",
        "text": "Unbonded electrons"
      },
      {
        "id": "D",
        "text": "Ions"
      }
    ],
    "answer": "D",
    "explanation": "Ions must be present in a solution to conduct an electric current."
  },
  {
    "id": "ch15-q18",
    "chapter": "Chapter 15",
    "sourceNumber": 18,
    "prompt": "Why is molten sodium chloride able to conduct electricity?",
    "options": [
      {
        "id": "A",
        "text": "It produces free electrons."
      },
      {
        "id": "B",
        "text": "Its ions are free to move toward an electrode."
      },
      {
        "id": "C",
        "text": "It vaporizes easily."
      },
      {
        "id": "D",
        "text": "It contains metallic bonds."
      }
    ],
    "answer": "B",
    "explanation": "Molten states free the ions to move toward an electrode."
  },
  {
    "id": "ch15-q19",
    "chapter": "Chapter 15",
    "sourceNumber": 19,
    "prompt": "What differentiates an aqueous solution of a strong electrolyte from that of a weak electrolyte?",
    "options": [
      {
        "id": "A",
        "text": "A strong electrolyte only partially dissolves."
      },
      {
        "id": "B",
        "text": "A strong electrolyte forms a precipitate."
      },
      {
        "id": "C",
        "text": "A strong electrolyte doesn't conduct electricity."
      },
      {
        "id": "D",
        "text": "A strong electrolyte is almost totally ionized."
      }
    ],
    "answer": "D",
    "explanation": "A strong electrolyte is almost totally ionized in solution."
  },
  {
    "id": "ch15-q20",
    "chapter": "Chapter 15",
    "sourceNumber": 20,
    "prompt": "What does a substance's \"water of hydration\" refer to?",
    "options": [
      {
        "id": "A",
        "text": "Water that has been purified for lab use."
      },
      {
        "id": "B",
        "text": "Water used to dissolve an electrolyte."
      },
      {
        "id": "C",
        "text": "Water in the crystal structure of a substance."
      },
      {
        "id": "D",
        "text": "Water that forms on the outside of a cold glass."
      }
    ],
    "answer": "C",
    "explanation": "Water of hydration is water contained within the crystal structure of a substance."
  },
  {
    "id": "ch15-q21",
    "chapter": "Chapter 15",
    "sourceNumber": 21,
    "prompt": "What is the correct chemical formula for barium hydroxide octahydrate?",
    "options": [
      {
        "id": "A",
        "text": "BaO · 8H2O"
      },
      {
        "id": "B",
        "text": "BaH2 · 8H2O"
      },
      {
        "id": "C",
        "text": "Ba(OH)2 · 8H2O"
      },
      {
        "id": "D",
        "text": "Ba(OH)2 · 6H2O"
      }
    ],
    "answer": "C",
    "explanation": "The prefix \"octa-\" dictates 8 water molecules: Ba(OH)2 · 8H2O."
  },
  {
    "id": "ch15-q22",
    "chapter": "Chapter 15",
    "sourceNumber": 22,
    "prompt": "What is the correct name for the hydrate FeSO4 · 7H2O?",
    "options": [
      {
        "id": "A",
        "text": "Iron sulfate hexahydrate"
      },
      {
        "id": "B",
        "text": "Iron(III) sulfate heptahydrate"
      },
      {
        "id": "C",
        "text": "Iron(II) sulfide heptahydrate"
      },
      {
        "id": "D",
        "text": "Iron(II) sulfate heptahydrate"
      }
    ],
    "answer": "D",
    "explanation": "Fe2+ is Iron(II), and \"hepta-\" means 7: Iron(II) sulfate heptahydrate."
  },
  {
    "id": "ch15-q23",
    "chapter": "Chapter 15",
    "sourceNumber": 23,
    "prompt": "When Epsom salt (MgSO4 · 7H2O) is heated to 150°C, it changes to the monohydrate form. Which equation correctly represents this change?",
    "options": [
      {
        "id": "A",
        "text": "MgSO4 · 7H2O → MgSO4 · H2O + 6H2O"
      },
      {
        "id": "B",
        "text": "MgSO4 · H2O + 6H2O → MgSO4 · 7H2O"
      },
      {
        "id": "C",
        "text": "MgSO4 · 7H2O → MgSO4 + 7H2O"
      },
      {
        "id": "D",
        "text": "MgSO4 · 7H2O → Mg + SO4 + 7H2O"
      }
    ],
    "answer": "A",
    "explanation": "Heating to monohydrate removes 6 water molecules: MgSO4 · 7H2O → MgSO4 · H2O + 6H2O."
  },
  {
    "id": "ch15-q24",
    "chapter": "Chapter 15",
    "sourceNumber": 24,
    "prompt": "How do hygroscopic substances function effectively as desiccants?",
    "options": [
      {
        "id": "A",
        "text": "They repel water molecules."
      },
      {
        "id": "B",
        "text": "They freeze ambient water."
      },
      {
        "id": "C",
        "text": "They release water vapor into the air."
      },
      {
        "id": "D",
        "text": "They absorb water vapor from the air."
      }
    ],
    "answer": "D",
    "explanation": "Hygroscopic desiccants function by absorbing water vapor from the air."
  },
  {
    "id": "ch15-q25",
    "chapter": "Chapter 15",
    "sourceNumber": 25,
    "prompt": "Why must hygroscopic compounds be stored in tightly sealed containers?",
    "options": [
      {
        "id": "A",
        "text": "They decompose in sunlight."
      },
      {
        "id": "B",
        "text": "They absorb water vapor from air."
      },
      {
        "id": "C",
        "text": "They are highly volatile."
      },
      {
        "id": "D",
        "text": "They react violently with nitrogen."
      }
    ],
    "answer": "B",
    "explanation": "They must be sealed because they rapidly absorb water vapor from ambient air."
  },
  {
    "id": "ch15-q26",
    "chapter": "Chapter 15",
    "sourceNumber": 26,
    "prompt": "Under what condition will an efflorescent hydrate lose its water of hydration?",
    "options": [
      {
        "id": "A",
        "text": "When the hydrate has a higher vapor pressure than that of the water vapor in air."
      },
      {
        "id": "B",
        "text": "When it is cooled below freezing."
      },
      {
        "id": "C",
        "text": "When it is dissolved in water."
      },
      {
        "id": "D",
        "text": "When it is placed in a high-humidity environment."
      }
    ],
    "answer": "A",
    "explanation": "Loss occurs when the hydrate's vapor pressure exceeds that of the ambient air."
  },
  {
    "id": "ch15-q27",
    "chapter": "Chapter 15",
    "sourceNumber": 27,
    "prompt": "What is a key observable difference between a suspension and a solution?",
    "options": [
      {
        "id": "A",
        "text": "Solutions cannot be filtered."
      },
      {
        "id": "B",
        "text": "Suspensions are always clear."
      },
      {
        "id": "C",
        "text": "A suspension has large particles that settle to the bottom, whereas particles in a solution stay suspended."
      },
      {
        "id": "D",
        "text": "A solution will settle over time, while a suspension will not."
      }
    ],
    "answer": "C",
    "explanation": "Suspensions contain large particles that settle, while solution particles stay suspended. Question Answer Justification / Calculation"
  },
  {
    "id": "ch15-q28",
    "chapter": "Chapter 15",
    "sourceNumber": 28,
    "prompt": "Which list correctly orders mixtures in order of increasing particle size?",
    "options": [
      {
        "id": "A",
        "text": "Solutions, suspensions, colloids"
      },
      {
        "id": "B",
        "text": "Colloids, solutions, suspensions"
      },
      {
        "id": "C",
        "text": "Solutions, colloids, suspensions"
      },
      {
        "id": "D",
        "text": "Suspensions, colloids, solutions"
      }
    ],
    "answer": "C",
    "explanation": "Correct increasing size order: Solutions (smallest), colloids, suspensions (largest)."
  },
  {
    "id": "ch15-q29",
    "chapter": "Chapter 15",
    "sourceNumber": 29,
    "prompt": "What is the Tyndall effect?",
    "options": [
      {
        "id": "A",
        "text": "The rapid random movement of particles"
      },
      {
        "id": "B",
        "text": "The scattering of visible light by colloids and suspensions"
      },
      {
        "id": "C",
        "text": "The absorption of light by a solution"
      },
      {
        "id": "D",
        "text": "The settling of particles in a suspension"
      }
    ],
    "answer": "B",
    "explanation": "The Tyndall effect is the scattering of visible light by colloids and suspensions."
  },
  {
    "id": "ch15-q30",
    "chapter": "Chapter 15",
    "sourceNumber": 30,
    "prompt": "Why do true solutions fail to demonstrate the Tyndall effect?",
    "options": [
      {
        "id": "A",
        "text": "They absorb all visible light."
      },
      {
        "id": "B",
        "text": "They are completely opaque."
      },
      {
        "id": "C",
        "text": "The solvent particles are too large."
      },
      {
        "id": "D",
        "text": "The molecules or ions are too small to have reflective surfaces."
      }
    ],
    "answer": "D",
    "explanation": "True solution molecules are too small to provide reflective surfaces."
  },
  {
    "id": "ch15-q31",
    "chapter": "Chapter 15",
    "sourceNumber": 31,
    "prompt": "Brownian motion is observed in colloidal dispersions. What is the cause of this motion?",
    "options": [
      {
        "id": "A",
        "text": "Magnetic fields acting on ions"
      },
      {
        "id": "B",
        "text": "Collisions of the molecules of the dispersing medium with the small, dispersed colloidal particles"
      },
      {
        "id": "C",
        "text": "The Tyndall effect"
      },
      {
        "id": "D",
        "text": "Gravitational pull on large particles"
      }
    ],
    "answer": "B",
    "explanation": "Caused by collisions of dispersing medium molecules with dispersed colloidal particles."
  },
  {
    "id": "ch15-q32",
    "chapter": "Chapter 15",
    "sourceNumber": 32,
    "prompt": "What two circumstances help keep colloidal particles in suspension?",
    "options": [
      {
        "id": "A",
        "text": "High density and low temperature"
      },
      {
        "id": "B",
        "text": "Gravity and air pressure"
      },
      {
        "id": "C",
        "text": "Solvation and efflorescence"
      },
      {
        "id": "D",
        "text": "Brownian motion and repulsion between like-charged ions absorbed on the surface of the colloidal particles"
      }
    ],
    "answer": "D",
    "explanation": "Brownian motion and repulsion between like-charged ions keep them suspended."
  },
  {
    "id": "ch15-q33",
    "chapter": "Chapter 15",
    "sourceNumber": 33,
    "prompt": "How can a stable colloidal dispersion be destroyed?",
    "options": [
      {
        "id": "A",
        "text": "Add ions with a charge opposite that of the colloidal particles."
      },
      {
        "id": "B",
        "text": "Boil the mixture."
      },
      {
        "id": "C",
        "text": "Add an emulsifier."
      },
      {
        "id": "D",
        "text": "Shine a light through it to trigger the Tyndall effect."
      }
    ],
    "answer": "A",
    "explanation": "Adding oppositely charged ions destroys the stability of the dispersion."
  },
  {
    "id": "ch15-q34",
    "chapter": "Chapter 15",
    "sourceNumber": 34,
    "prompt": "What can be added to a colloidal dispersion to make it stable?",
    "options": [
      {
        "id": "A",
        "text": "A desiccant"
      },
      {
        "id": "B",
        "text": "An emulsifier"
      },
      {
        "id": "C",
        "text": "A strong acid"
      },
      {
        "id": "D",
        "text": "An electrolyte"
      }
    ],
    "answer": "B",
    "explanation": "An emulsifier is added to stabilize a colloidal dispersion."
  },
  {
    "id": "ch15-q37",
    "chapter": "Chapter 15",
    "sourceNumber": 37,
    "prompt": "Which term describes a wetting agent that interferes with hydrogen bonding between water molecules and reduces surface tension?",
    "options": [
      {
        "id": "A",
        "text": "Desiccant"
      },
      {
        "id": "B",
        "text": "Surfactant"
      },
      {
        "id": "C",
        "text": "Solute"
      },
      {
        "id": "D",
        "text": "Emulsifier"
      }
    ],
    "answer": "B",
    "explanation": "A surfactant is a wetting agent that reduces surface tension."
  },
  {
    "id": "ch15-q38",
    "chapter": "Chapter 15",
    "sourceNumber": 38,
    "prompt": "Which term describes the process where cations and anions become surrounded by solvent molecules?",
    "options": [
      {
        "id": "A",
        "text": "Efflorescence"
      },
      {
        "id": "B",
        "text": "Solvation"
      },
      {
        "id": "C",
        "text": "Brownian motion"
      },
      {
        "id": "D",
        "text": "Suspension"
      }
    ],
    "answer": "B",
    "explanation": "Solvation is when ions become surrounded by solvent molecules."
  },
  {
    "id": "ch15-q39",
    "chapter": "Chapter 15",
    "sourceNumber": 39,
    "prompt": "What do we call a substance that is almost totally ionized in an aqueous solution?",
    "options": [
      {
        "id": "A",
        "text": "A strong electrolyte"
      },
      {
        "id": "B",
        "text": "A weak electrolyte"
      },
      {
        "id": "C",
        "text": "A nonpolar solvent"
      },
      {
        "id": "D",
        "text": "A colloid"
      }
    ],
    "answer": "A",
    "explanation": "A strong electrolyte is almost totally ionized."
  },
  {
    "id": "ch15-q40",
    "chapter": "Chapter 15",
    "sourceNumber": 40,
    "prompt": "Which term identifies the phenomenon involving the scattering of visible light by colloids and suspensions?",
    "options": [
      {
        "id": "A",
        "text": "Efflorescence"
      },
      {
        "id": "B",
        "text": "Solvation"
      },
      {
        "id": "C",
        "text": "Tyndall effect"
      },
      {
        "id": "D",
        "text": "Brownian motion"
      }
    ],
    "answer": "C",
    "explanation": "The Tyndall effect identifies the scattering of visible light."
  },
  {
    "id": "ch15-q41",
    "chapter": "Chapter 15",
    "sourceNumber": 41,
    "prompt": "What term refers to a hydrate that loses its water of hydration because it has a higher vapor pressure than the water vapor in the air?",
    "options": [
      {
        "id": "A",
        "text": "Hygroscopic"
      },
      {
        "id": "B",
        "text": "Aqueous"
      },
      {
        "id": "C",
        "text": "Emulsifier"
      },
      {
        "id": "D",
        "text": "Efflorescent"
      }
    ],
    "answer": "D",
    "explanation": "Efflorescent hydrates lose water due to high vapor pressure."
  },
  {
    "id": "ch16-q1",
    "chapter": "Chapter 16",
    "sourceNumber": 1,
    "prompt": "Name and distinguish between the two components of a solution.",
    "options": [
      {
        "id": "A",
        "text": "The solvent is dissolved in the solute."
      },
      {
        "id": "B",
        "text": "The solute is the substance in which the solvent is dissolved."
      },
      {
        "id": "C",
        "text": "The solvent is the substance in which the solute is dissolved."
      },
      {
        "id": "D",
        "text": "The solute and solvent are immiscible liquids."
      }
    ],
    "answer": "C",
    "explanation": "The solvent is the substance in which the solute is dissolved."
  },
  {
    "id": "ch16-q2",
    "chapter": "Chapter 16",
    "sourceNumber": 2,
    "prompt": "Explain why the dissolved component does not settle out of a solution.",
    "options": [
      {
        "id": "A",
        "text": "Gravity has no effect on dissolved particles."
      },
      {
        "id": "B",
        "text": "Random collisions of the solvent molecules with the solute particles provide enough force to overcome gravity."
      },
      {
        "id": "C",
        "text": "The solute particles are chemically bonded to the container."
      },
      {
        "id": "D",
        "text": "The solute has a lower density than the solvent."
      }
    ],
    "answer": "B",
    "explanation": "Random solvent collisions provide the force to overcome gravity."
  },
  {
    "id": "ch16-q3",
    "chapter": "Chapter 16",
    "sourceNumber": 3,
    "prompt": "If a saturated solution of potassium chloride is cooled, what change might you observe?",
    "options": [
      {
        "id": "A",
        "text": "The solution begins to boil."
      },
      {
        "id": "B",
        "text": "The solvent evaporates instantly."
      },
      {
        "id": "C",
        "text": "The solution becomes unsaturated."
      },
      {
        "id": "D",
        "text": "Particles of solute crystallize."
      }
    ],
    "answer": "D",
    "explanation": "Cooling a saturated solution lowers solubility, causing solute particles to crystallize."
  },
  {
    "id": "ch16-q4",
    "chapter": "Chapter 16",
    "sourceNumber": 4,
    "prompt": "Can a solution with undissolved solute be supersaturated?",
    "options": [
      {
        "id": "A",
        "text": "Yes, because the presence of solid means it holds maximum capacity."
      },
      {
        "id": "B",
        "text": "Yes, undissolved solute is the definition of supersaturation."
      },
      {
        "id": "C",
        "text": "No; if there were undissolved solute, the excess solute would come out of a supersaturated solution."
      },
      {
        "id": "D",
        "text": "No, because supersaturated solutions only exist at extremely low temperatures."
      }
    ],
    "answer": "C",
    "explanation": "No; undissolved solute forces excess to come out of a supersaturated solution."
  },
  {
    "id": "ch16-q5",
    "chapter": "Chapter 16",
    "sourceNumber": 5,
    "prompt": "What mass of AgNO ₃ can be dissolved in 500 g of water at 20°C?",
    "options": [
      {
        "id": "A",
        "text": "224 g"
      },
      {
        "id": "B",
        "text": "560 g"
      },
      {
        "id": "C",
        "text": "1.12 × 10³ g"
      },
      {
        "id": "D",
        "text": "2.24 × 10³ g"
      }
    ],
    "answer": "C",
    "explanation": "Utilizing solubility curves (approx 222 g/100g water at 20°C), 5 × 222 g = 1110 g or 1.12 × 10^3 g."
  },
  {
    "id": "ch16-q6",
    "chapter": "Chapter 16",
    "sourceNumber": 6,
    "prompt": "What is the effect of pressure on the solubility of gases in liquids?",
    "options": [
      {
        "id": "A",
        "text": "Solubility decreases with pressure."
      },
      {
        "id": "B",
        "text": "Solubility increases with pressure."
      },
      {
        "id": "C",
        "text": "Pressure has no effect on solubility."
      },
      {
        "id": "D",
        "text": "Solubility fluctuates randomly with pressure changes."
      }
    ],
    "answer": "B",
    "explanation": "Gas solubility is directly proportional to pressure, thus solubility increases with pressure."
  },
  {
    "id": "ch16-q7",
    "chapter": "Chapter 16",
    "sourceNumber": 7,
    "prompt": "The solubility of a gas in water at 20°C and 1.00 atm is 0.040 g/L. If the temperature remains constant, what will be the solubility of this gas at 0.50 atm?",
    "options": [
      {
        "id": "A",
        "text": "0.010 g/L"
      },
      {
        "id": "B",
        "text": "0.020 g/L"
      },
      {
        "id": "C",
        "text": "0.040 g/L"
      },
      {
        "id": "D",
        "text": "0.080 g/L"
      }
    ],
    "answer": "B",
    "explanation": "Using Henry's Law (S1/P1 = S2/P2): 0.040/1.00 = x/0.50, x = 0.020 g/L."
  },
  {
    "id": "ch16-q8",
    "chapter": "Chapter 16",
    "sourceNumber": 8,
    "prompt": "Knowing the molarity of a solution is more meaningful than knowing whether a solution is dilute or concentrated. Explain.",
    "options": [
      {
        "id": "A",
        "text": "Dilute and concentrated are exact quantitative terms."
      },
      {
        "id": "B",
        "text": "Molarity indicates whether a solution is saturated or not."
      },
      {
        "id": "C",
        "text": "Dilute and concentrated are relative terms and are not quantitative; molarity provides the exact number of moles of solute per liter of solution."
      },
      {
        "id": "D",
        "text": "Molarity only measures the volume of the solvent."
      }
    ],
    "answer": "C",
    "explanation": "Dilute and concentrated are relative, whereas molarity gives the exact moles per liter."
  },
  {
    "id": "ch16-q9",
    "chapter": "Chapter 16",
    "sourceNumber": 9,
    "prompt": "Calculate the molarity of a solution containing 2.0 mol of NaCl in 500 mL of solution.",
    "options": [
      {
        "id": "A",
        "text": "1.0M"
      },
      {
        "id": "B",
        "text": "2.0M"
      },
      {
        "id": "C",
        "text": "4.0M"
      },
      {
        "id": "D",
        "text": "0.25M"
      }
    ],
    "answer": "C",
    "explanation": "Molarity = Moles / Liters. 2.0 mol / 0.500 L = 4.0M."
  },
  {
    "id": "ch16-q10",
    "chapter": "Chapter 16",
    "sourceNumber": 10,
    "prompt": "How many milliliters of a 2.00M HCl solution would you need to dilute to make 250.0 mL of 0.500M HCl?",
    "options": [
      {
        "id": "A",
        "text": "15.0 mL"
      },
      {
        "id": "B",
        "text": "31.3 mL"
      },
      {
        "id": "C",
        "text": "62.5 mL"
      },
      {
        "id": "D",
        "text": "125.0 mL"
      }
    ],
    "answer": "C",
    "explanation": "M1V1 = M2V2. 2.00 × V1 = 0.500 × 250.0. V1 = 62.5 mL."
  },
  {
    "id": "ch16-q11",
    "chapter": "Chapter 16",
    "sourceNumber": 11,
    "prompt": "Calculate the mass of solute in 2.0 L of a 0.25M NaOH solution. (Assuming a molar mass of approximately 40 g/mol).",
    "options": [
      {
        "id": "A",
        "text": "10 g"
      },
      {
        "id": "B",
        "text": "20 g"
      },
      {
        "id": "C",
        "text": "40 g"
      },
      {
        "id": "D",
        "text": "80 g"
      }
    ],
    "answer": "B",
    "explanation": "Moles = M × V = 0.25 × 2.0 = 0.50 mol. Mass = 0.50 mol × 40 g/mol = 20 g."
  },
  {
    "id": "ch16-q12",
    "chapter": "Chapter 16",
    "sourceNumber": 12,
    "prompt": "Calculate the grams of solute required to make 1500 g of a 2.0% (m/m) KCl solution.",
    "options": [
      {
        "id": "A",
        "text": "15 g"
      },
      {
        "id": "B",
        "text": "30 g"
      },
      {
        "id": "C",
        "text": "75 g"
      },
      {
        "id": "D",
        "text": "300 g"
      }
    ],
    "answer": "B",
    "explanation": "2.0% = (Mass / 1500) × 100. Mass = 0.02 × 1500 = 30 g."
  },
  {
    "id": "ch16-q13",
    "chapter": "Chapter 16",
    "sourceNumber": 13,
    "prompt": "What is the concentration (in % v/v) if 40 mL of methanol is diluted with water to a total volume of 200 mL?",
    "options": [
      {
        "id": "A",
        "text": "16% (v/v)"
      },
      {
        "id": "B",
        "text": "20% (v/v)"
      },
      {
        "id": "C",
        "text": "25% (v/v)"
      },
      {
        "id": "D",
        "text": "80% (v/v)"
      }
    ],
    "answer": "B",
    "explanation": "%V/v = (40 mL / 200 mL) × 100 = 20%."
  },
  {
    "id": "ch16-q14",
    "chapter": "Chapter 16",
    "sourceNumber": 14,
    "prompt": "What are colligative properties?",
    "options": [
      {
        "id": "A",
        "text": "Properties that depend only on the identity of the solute particles."
      },
      {
        "id": "B",
        "text": "Properties of a solution that depend only on the number of solute particles."
      },
      {
        "id": "C",
        "text": "Properties that depend only on the temperature of the solvent."
      },
      {
        "id": "D",
        "text": "Properties that determine the chemical reactivity of the solution."
      }
    ],
    "answer": "B",
    "explanation": "Colligative properties depend only on the number of solute particles."
  },
  {
    "id": "ch16-q15",
    "chapter": "Chapter 16",
    "sourceNumber": 15,
    "prompt": "Which solution has the higher boiling point: 2.0M NaCl or 1.0M MgCl ₂?",
    "options": [
      {
        "id": "A",
        "text": "2.0M NaCl"
      },
      {
        "id": "B",
        "text": "1.0M MgCl ₂"
      },
      {
        "id": "C",
        "text": "They have the same boiling point."
      },
      {
        "id": "D",
        "text": "Distilled water has a higher boiling point than both."
      }
    ],
    "answer": "A",
    "explanation": "2.0M NaCl dissociates into 4.0M particles, while 1.0M MgCl2 yields 3.0M. Higher particle concentration yields higher boiling point."
  },
  {
    "id": "ch16-q16",
    "chapter": "Chapter 16",
    "sourceNumber": 16,
    "prompt": "Why does a 1m solution of CaCl ₂ have a lower freezing point than a 1m solution of KCl?",
    "options": [
      {
        "id": "A",
        "text": "CaCl ₂ is more massive than KCl."
      },
      {
        "id": "B",
        "text": "The effective molality of the CaCl ₂ solution is 3m, while the effective molality of the KCl solution is 2m."
      },
      {
        "id": "C",
        "text": "Potassium is more reactive than calcium."
      },
      {
        "id": "D",
        "text": "The effective molality of the KCl solution is higher."
      }
    ],
    "answer": "B",
    "explanation": "CaCl2 forms 3 particles per unit (effective molality 3m); KCl forms 2 (effective molality 2m)."
  },
  {
    "id": "ch16-q17",
    "chapter": "Chapter 16",
    "sourceNumber": 17,
    "prompt": "Explain how a decrease in the vapor pressure of a solution affects its boiling point.",
    "options": [
      {
        "id": "A",
        "text": "It decreases the boiling point relative to pure solvent."
      },
      {
        "id": "B",
        "text": "When vapor pressure is lowered relative to pure solvent, more energy must be supplied to reach the boiling point; thus the boiling point is increased."
      },
      {
        "id": "C",
        "text": "It has no effect on the boiling point."
      },
      {
        "id": "D",
        "text": "It causes the solution to freeze instead of boil."
      }
    ],
    "answer": "B",
    "explanation": "Lowered vapor pressure requires more energy to reach atmospheric pressure, increasing boiling point."
  },
  {
    "id": "ch16-q18",
    "chapter": "Chapter 16",
    "sourceNumber": 18,
    "prompt": "In cold climates, salt is spread on roads during winter storms. What is the purpose of the salt?",
    "options": [
      {
        "id": "A",
        "text": "The salt raises the freezing point of the ice."
      },
      {
        "id": "B",
        "text": "The salt lowers the freezing point of the ice-water cooling mixture."
      },
      {
        "id": "C",
        "text": "The salt increases the friction of the road surface only."
      },
      {
        "id": "D",
        "text": "The salt absorbs the water to form a solid hydrate."
      }
    ],
    "answer": "B",
    "explanation": "The salt acts as a solute to lower the freezing point of the ice-water mixture."
  },
  {
    "id": "ch16-q19",
    "chapter": "Chapter 16",
    "sourceNumber": 19,
    "prompt": "Distinguish between a 1M solution and a 1m solution.",
    "options": [
      {
        "id": "A",
        "text": "1M is 1 mol of solute in 1 L of solution; 1m is 1 mol of solute in 1000 g of solvent."
      },
      {
        "id": "B",
        "text": "1M is 1 mol of solute in 1000 g of solvent; 1m is 1 mol of solute in 1 L of solution."
      },
      {
        "id": "C",
        "text": "1M relies on temperature, while 1m relies on pressure."
      },
      {
        "id": "D",
        "text": "There is no structural difference; they are interchangeable terms."
      }
    ],
    "answer": "A",
    "explanation": "1M is defined per liter of solution; 1m is defined per 1000 g of solvent."
  },
  {
    "id": "ch16-q42",
    "chapter": "Chapter 16",
    "sourceNumber": 42,
    "prompt": "Which term describes liquids that are insoluble in one another, such as oil and water?",
    "options": [
      {
        "id": "A",
        "text": "Miscible"
      },
      {
        "id": "B",
        "text": "Immiscible"
      },
      {
        "id": "C",
        "text": "Unsaturated"
      },
      {
        "id": "D",
        "text": "Solvated"
      }
    ],
    "answer": "B",
    "explanation": "Immiscible describes liquids that are insoluble in one another."
  },
  {
    "id": "ch16-q43",
    "chapter": "Chapter 16",
    "sourceNumber": 43,
    "prompt": "The amount of a substance that dissolves in a given quantity of solvent at specified conditions of temperature and pressure to produce a saturated solution is called its:",
    "options": [
      {
        "id": "A",
        "text": "Molarity"
      },
      {
        "id": "B",
        "text": "Molality"
      },
      {
        "id": "C",
        "text": "Solubility"
      },
      {
        "id": "D",
        "text": "Concentration"
      }
    ],
    "answer": "C",
    "explanation": "Solubility is the amount that dissolves in a given quantity of solvent."
  },
  {
    "id": "ch16-q44",
    "chapter": "Chapter 16",
    "sourceNumber": 44,
    "prompt": "At a given temperature, the solubility of a gas in a liquid is directly proportional to the pressure of the gas above the liquid. This is known as:",
    "options": [
      {
        "id": "A",
        "text": "Boyle's Law"
      },
      {
        "id": "B",
        "text": "Charles's Law"
      },
      {
        "id": "C",
        "text": "Graham's Law"
      },
      {
        "id": "D",
        "text": "Henry's law"
      }
    ],
    "answer": "D",
    "explanation": "Henry's Law equates gas solubility directly to pressure. Question Answer Justification / Calculation"
  },
  {
    "id": "ch16-q45",
    "chapter": "Chapter 16",
    "sourceNumber": 45,
    "prompt": "Which term describes a solution containing the maximum amount of solute for a given amount of solvent at a constant temperature and pressure?",
    "options": [
      {
        "id": "A",
        "text": "Saturated solution"
      },
      {
        "id": "B",
        "text": "Unsaturated solution"
      },
      {
        "id": "C",
        "text": "Supersaturated solution"
      },
      {
        "id": "D",
        "text": "Dilute solution"
      }
    ],
    "answer": "A",
    "explanation": "A saturated solution holds the maximum amount of solute."
  },
  {
    "id": "ch16-q46",
    "chapter": "Chapter 16",
    "sourceNumber": 46,
    "prompt": "The ratio of the moles of solute in solution to the total number of moles of both solvent and solute is known as the:",
    "options": [
      {
        "id": "A",
        "text": "Molality"
      },
      {
        "id": "B",
        "text": "Mole fraction"
      },
      {
        "id": "C",
        "text": "Molarity"
      },
      {
        "id": "D",
        "text": "Concentration"
      }
    ],
    "answer": "B",
    "explanation": "Mole fraction is the ratio of solute moles to total moles."
  },
  {
    "id": "ch17-q1",
    "chapter": "Chapter 17",
    "sourceNumber": 1,
    "prompt": "Which of the following best describes the law of conservation of energy?",
    "options": [
      {
        "id": "A",
        "text": "Energy naturally flows from a colder object to a warmer object."
      },
      {
        "id": "B",
        "text": "In any chemical or physical process, energy is neither created nor destroyed."
      },
      {
        "id": "C",
        "text": "The potential energy of a system always decreases during a chemical reaction."
      },
      {
        "id": "D",
        "text": "Energy is only conserved in exothermic reactions, but not in endothermic reactions."
      }
    ],
    "answer": "B",
    "explanation": "Energy is neither created nor destroyed in chemical/physical processes."
  },
  {
    "id": "ch17-q2",
    "chapter": "Chapter 17",
    "sourceNumber": 2,
    "prompt": "When a warm block of aluminum is placed in a cool cup of water, what always happens?",
    "options": [
      {
        "id": "A",
        "text": "Heat flows from the water to the aluminum until they reach the same temperature."
      },
      {
        "id": "B",
        "text": "Coldness flows from the water into the aluminum block."
      },
      {
        "id": "C",
        "text": "Heat flows from the aluminum to the water."
      },
      {
        "id": "D",
        "text": "The temperature of both objects immediately drops to the surrounding room temperature."
      }
    ],
    "answer": "C",
    "explanation": "Heat flows directly from the warmer object (aluminum) to the cooler one (water)."
  },
  {
    "id": "ch17-q3",
    "chapter": "Chapter 17",
    "sourceNumber": 3,
    "prompt": "In terms of chemistry, how is potential energy defined?",
    "options": [
      {
        "id": "A",
        "text": "The energy an object possesses due to its motion."
      },
      {
        "id": "B",
        "text": "The energy stored in a substance because of its chemical composition."
      },
      {
        "id": "C",
        "text": "The heat transferred between the system and the surroundings."
      },
      {
        "id": "D",
        "text": "The energy required to raise the temperature of 1 gram of water by 1°C."
      }
    ],
    "answer": "B",
    "explanation": "Potential energy is stored due to a substance's chemical composition."
  },
  {
    "id": "ch17-q4",
    "chapter": "Chapter 17",
    "sourceNumber": 4,
    "prompt": "What two factors primarily determine the heat capacity of an object?",
    "options": [
      {
        "id": "A",
        "text": "The volume of the substance and its temperature."
      },
      {
        "id": "B",
        "text": "The chemical composition of the substance and its mass."
      },
      {
        "id": "C",
        "text": "The atmospheric pressure and the specific heat."
      },
      {
        "id": "D",
        "text": "The phase of the substance and its density."
      }
    ],
    "answer": "B",
    "explanation": "Heat capacity relies on mass and chemical composition."
  },
  {
    "id": "ch17-q5",
    "chapter": "Chapter 17",
    "sourceNumber": 5,
    "prompt": "Which of the following statements correctly describes the relationship between a chemistry calorie (cal) and a dietary Calorie (Cal)?",
    "options": [
      {
        "id": "A",
        "text": "1 Cal = 100 cal"
      },
      {
        "id": "B",
        "text": "1000 Cal = 1 cal"
      },
      {
        "id": "C",
        "text": "1 Cal = 1000 cal"
      },
      {
        "id": "D",
        "text": "1 Cal = 4.184 cal"
      }
    ],
    "answer": "B",
    "explanation": "1000 chemistry calories (cal) equals 1 dietary Calorie (Cal)."
  },
  {
    "id": "ch17-q6",
    "chapter": "Chapter 17",
    "sourceNumber": 6,
    "prompt": "What is the equivalent of 350 cal in joules? (Note: 1 cal = 4.184 J)",
    "options": [
      {
        "id": "A",
        "text": "83.6 J"
      },
      {
        "id": "B",
        "text": "1464 J"
      },
      {
        "id": "C",
        "text": "1.46 × 10³ J"
      },
      {
        "id": "D",
        "text": "8.36 × 10¹ J"
      }
    ],
    "answer": "C",
    "explanation": "350 cal × 4.184 J/cal = 1464.4 J or 1.46 × 10^3 J."
  },
  {
    "id": "ch17-q7",
    "chapter": "Chapter 17",
    "sourceNumber": 7,
    "prompt": "Why is it important to define the system and the surroundings in thermochemistry?",
    "options": [
      {
        "id": "A",
        "text": "To determine the exact mass of the products formed."
      },
      {
        "id": "B",
        "text": "To accurately measure the heat flow across the boundary between them."
      },
      {
        "id": "C",
        "text": "Because the surroundings always have a higher temperature than the system."
      },
      {
        "id": "D",
        "text": "So that the law of conservation of mass can be proven."
      }
    ],
    "answer": "B",
    "explanation": "Defining boundaries accurately measures heat flow between them."
  },
  {
    "id": "ch17-q8",
    "chapter": "Chapter 17",
    "sourceNumber": 8,
    "prompt": "What is the correct sign convention used in thermochemical calculations?",
    "options": [
      {
        "id": "A",
        "text": "A positive sign is given to heat flow from the system to the surroundings."
      },
      {
        "id": "B",
        "text": "A negative sign indicates an endothermic process."
      },
      {
        "id": "C",
        "text": "A negative sign is given to heat flow from the system to the surroundings, and a positive sign indicates heat flow to the system."
      },
      {
        "id": "D",
        "text": "Both exothermic and endothermic processes use positive signs if the temperature increases."
      }
    ],
    "answer": "C",
    "explanation": "Heat flow out of a system is negative; flow into the system is positive."
  },
  {
    "id": "ch17-q9",
    "chapter": "Chapter 17",
    "sourceNumber": 9,
    "prompt": "Two chemical substances are mixed in a beaker, and the beaker quickly feels freezing cold to the touch. What is the nature of this reaction, and what constitutes the surroundings?",
    "options": [
      {
        "id": "A",
        "text": "Exothermic; the chemicals are the surroundings."
      },
      {
        "id": "B",
        "text": "Endothermic; the glass beaker and the surrounding air are the surroundings."
      },
      {
        "id": "C",
        "text": "Endothermic; only the chemicals inside the beaker are the surroundings."
      },
      {
        "id": "D",
        "text": "Exothermic; the surrounding air is the system."
      }
    ],
    "answer": "B",
    "explanation": "Freezing cold means it absorbed heat (endothermic); the beaker and air are surroundings."
  },
  {
    "id": "ch17-q10",
    "chapter": "Chapter 17",
    "sourceNumber": 10,
    "prompt": "Which of the following processes is considered endothermic?",
    "options": [
      {
        "id": "A",
        "text": "Condensing water vapor"
      },
      {
        "id": "B",
        "text": "Evaporating liquid nitrogen"
      },
      {
        "id": "C",
        "text": "Burning a piece of wood"
      },
      {
        "id": "D",
        "text": "Freezing water into ice"
      }
    ],
    "answer": "B",
    "explanation": "Evaporating liquid nitrogen requires absorbing heat (endothermic)."
  },
  {
    "id": "ch17-q11",
    "chapter": "Chapter 17",
    "sourceNumber": 11,
    "prompt": "What name is given to a heat change that occurs at constant pressure?",
    "options": [
      {
        "id": "A",
        "text": "Specific heat"
      },
      {
        "id": "B",
        "text": "Entropy"
      },
      {
        "id": "C",
        "text": "Enthalpy"
      },
      {
        "id": "D",
        "text": "Kinetic energy"
      }
    ],
    "answer": "C",
    "explanation": "Enthalpy represents heat change occurring at constant pressure."
  },
  {
    "id": "ch17-q12",
    "chapter": "Chapter 17",
    "sourceNumber": 12,
    "prompt": "What is the primary function of a calorimeter?",
    "options": [
      {
        "id": "A",
        "text": "To measure atmospheric pressure changes."
      },
      {
        "id": "B",
        "text": "To measure enthalpy changes in physical or chemical processes."
      },
      {
        "id": "C",
        "text": "To determine the molecular weight of an unknown compound."
      },
      {
        "id": "D",
        "text": "To accelerate the rate of a chemical reaction."
      }
    ],
    "answer": "B",
    "explanation": "Calorimeters are designed to measure enthalpy changes. Question Answer Justification / Calculation"
  },
  {
    "id": "ch17-q13",
    "chapter": "Chapter 17",
    "sourceNumber": 13,
    "prompt": "Which of the following is an obvious source of error when using a foam cup as a calorimeter?",
    "options": [
      {
        "id": "A",
        "text": "The foam cup perfectly reflects all heat back into the solution."
      },
      {
        "id": "B",
        "text": "The reactants may not be completely mixed, and heat can be lost to the air."
      },
      {
        "id": "C",
        "text": "Foam cups generate their own heat, skewing the data."
      },
      {
        "id": "D",
        "text": "The foam cup increases the activation energy of the reaction."
      }
    ],
    "answer": "B",
    "explanation": "Incomplete mixing and heat loss to ambient air are sources of error."
  },
  {
    "id": "ch17-q14",
    "chapter": "Chapter 17",
    "sourceNumber": 14,
    "prompt": "What device is specifically used to measure the heat released during a chemical reaction at constant volume?",
    "options": [
      {
        "id": "A",
        "text": "A standard foam cup calorimeter"
      },
      {
        "id": "B",
        "text": "A barometer"
      },
      {
        "id": "C",
        "text": "A bomb calorimeter"
      },
      {
        "id": "D",
        "text": "A spectrophotometer"
      }
    ],
    "answer": "C",
    "explanation": "A bomb calorimeter measures heat released at constant volume."
  },
  {
    "id": "ch17-q15",
    "chapter": "Chapter 17",
    "sourceNumber": 15,
    "prompt": "What are the standard conditions for measuring the heat of combustion?",
    "options": [
      {
        "id": "A",
        "text": "101.3 kPa (1 atm) and 0°C"
      },
      {
        "id": "B",
        "text": "101.3 kPa (1 atm) and 25°C"
      },
      {
        "id": "C",
        "text": "100.0 kPa and 100°C"
      },
      {
        "id": "D",
        "text": "0.0 kPa and 25°C"
      }
    ],
    "answer": "B",
    "explanation": "Standard conditions are 101.3 kPa (1 atm) and 25°C."
  },
  {
    "id": "ch17-q16",
    "chapter": "Chapter 17",
    "sourceNumber": 16,
    "prompt": "What specific information must be provided in a thermochemical equation?",
    "options": [
      {
        "id": "A",
        "text": "Only the balanced chemical formulas of the reactants and products."
      },
      {
        "id": "B",
        "text": "The molar masses of all substances involved."
      },
      {
        "id": "C",
        "text": "The amount of heat released or absorbed in the chemical change at constant pressure."
      },
      {
        "id": "D",
        "text": "The rate at which the reaction occurs."
      }
    ],
    "answer": "C",
    "explanation": "A thermochemical equation explicitly includes the heat released or absorbed."
  },
  {
    "id": "ch17-q17",
    "chapter": "Chapter 17",
    "sourceNumber": 17,
    "prompt": "Why does the temperature of a glass of ice water remain at 0°C even as heat continuously flows from the warmer room into the glass?",
    "options": [
      {
        "id": "A",
        "text": "Heat is being used to melt the ice rather than increase the kinetic energy of the particles."
      },
      {
        "id": "B",
        "text": "The water is evaporating rapidly, causing a cooling effect."
      },
      {
        "id": "C",
        "text": "Ice has an infinite heat capacity."
      },
      {
        "id": "D",
        "text": "The glass reflects the heat away from the system."
      }
    ],
    "answer": "A",
    "explanation": "Incoming heat fuels the phase change (melting ice) rather than increasing kinetic energy."
  },
  {
    "id": "ch17-q18",
    "chapter": "Chapter 17",
    "sourceNumber": 18,
    "prompt": "Calculate the quantity of heat lost when 2.00 mol of water freezes at 0°",
    "options": [
      {
        "id": "C",
        "text": "(Assume the molar heat of fusion for water is 6.01 kJ/mol)."
      },
      {
        "id": "A",
        "text": "+12.0 kJ"
      },
      {
        "id": "B",
        "text": "-12.0 kJ"
      },
      {
        "id": "C",
        "text": "-3.01 kJ D) +3.01 kJ"
      }
    ],
    "answer": "B",
    "explanation": "Freezing loses heat: 2.00 mol × (-6.01 kJ/mol) = -12.0 kJ."
  },
  {
    "id": "ch17-q19",
    "chapter": "Chapter 17",
    "sourceNumber": 19,
    "prompt": "Ammonium nitrate dissolves readily in water according to the following equation: NH ₄ NO ₃ (s) → NH ₄⁺ (aq) + NO ₃⁻ (aq) Δ H = 25.7 kJ/mol. Would this process increase or decrease the temperature of the water?",
    "options": [
      {
        "id": "A",
        "text": "Increase, because the reaction is exothermic."
      },
      {
        "id": "B",
        "text": "Increase, because the reaction is endothermic."
      },
      {
        "id": "C",
        "text": "Decrease, because the reaction is exothermic."
      },
      {
        "id": "D",
        "text": "Decrease, because the reaction is endothermic."
      }
    ],
    "answer": "D",
    "explanation": "The reaction has a positive Δ H (25.7 kJ/mol), meaning it absorbs heat (endothermic) and decreases water temperature."
  },
  {
    "id": "ch17-q20",
    "chapter": "Chapter 17",
    "sourceNumber": 20,
    "prompt": "Which of the following statements best explains Hess's law of heat summation?",
    "options": [
      {
        "id": "A",
        "text": "The total enthalpy of a system is equal to its heat capacity multiplied by its mass."
      },
      {
        "id": "B",
        "text": "The enthalpy change of a reaction can be calculated from the known enthalpy changes of two or more other reactions."
      },
      {
        "id": "C",
        "text": "Heat always flows from a higher temperature to a lower temperature."
      },
      {
        "id": "D",
        "text": "The heat of a reaction is only dependent on the atmospheric pressure."
      }
    ],
    "answer": "B",
    "explanation": "Hess's law allows enthalpy calculation from the known enthalpies of multiple steps."
  },
  {
    "id": "ch17-q21",
    "chapter": "Chapter 17",
    "sourceNumber": 21,
    "prompt": "The decomposition of nitrogen dioxide requires heat: 2NO ₂ (g) → N ₂ (g) + 2O ₂ (g) Δ H = +66.4 kJ. What is the enthalpy change for the formation of 1 mol of NO ₂ from its elements, and is this formation exothermic or endothermic?",
    "options": [
      {
        "id": "A",
        "text": "+66.4 kJ, endothermic"
      },
      {
        "id": "B",
        "text": "-33.2 kJ, exothermic"
      },
      {
        "id": "C",
        "text": "-66.4 kJ, exothermic"
      },
      {
        "id": "D",
        "text": "+33.2 kJ, endothermic"
      }
    ],
    "answer": "D",
    "explanation": "Reverse reaction changes sign to -66.4 kJ for 2 mol; dividing by 2 for 1 mol yields +33.2 kJ, which is endothermic."
  },
  {
    "id": "ch17-q22",
    "chapter": "Chapter 17",
    "sourceNumber": 22,
    "prompt": "Calculate the enthalpy change for the formation of substance XY ₄ (l) from XY ₂ (s) and Y ₂ (g), given the following thermochemical equations: X(s) + 2Y ₂ (g) → XY ₄ (l) Δ H = -400.0 kJ X(s) + Y ₂ (g) → XY ₂ (s) Δ H = -250.0 kJ Reaction to solve: XY ₂ (s) + Y ₂ (g) → XY ₄ (l)",
    "options": [
      {
        "id": "A",
        "text": "-650.0 kJ"
      },
      {
        "id": "B",
        "text": "-150.0 kJ"
      },
      {
        "id": "C",
        "text": "+150.0 kJ"
      },
      {
        "id": "D",
        "text": "+650.0 kJ"
      }
    ],
    "answer": "A",
    "explanation": "Summing the steps directly gives -400.0 kJ + (-250.0 kJ) = -650.0 kJ."
  },
  {
    "id": "ch17-q23",
    "chapter": "Chapter 17",
    "sourceNumber": 23,
    "prompt": "What is the standard heat of formation (Δ H_f°) of a free element in its standard state?",
    "options": [
      {
        "id": "A",
        "text": "Always a negative value"
      },
      {
        "id": "B",
        "text": "Always a positive value"
      },
      {
        "id": "C",
        "text": "Exactly zero"
      },
      {
        "id": "D",
        "text": "101.3 kJ"
      }
    ],
    "answer": "C",
    "explanation": "The standard heat of formation for a free element in its standard state is exactly zero."
  },
  {
    "id": "ch17-q24",
    "chapter": "Chapter 17",
    "sourceNumber": 24,
    "prompt": "Consider the statement, \"the more negative the value of Δ H_f°, the more stable the compound.\" Is this statement generally true or false, and why?",
    "options": [
      {
        "id": "A",
        "text": "False, because stability implies a higher energy state."
      },
      {
        "id": "B",
        "text": "True, because a greater release of heat indicates the compound is more stable relative to its elements."
      },
      {
        "id": "C",
        "text": "False, because negative values indicate the compound will rapidly decompose."
      },
      {
        "id": "D",
        "text": "True, because negative values mean the compound requires energy to form."
      }
    ],
    "answer": "B",
    "explanation": "Greater heat release (more negative) indicates higher stability relative to its constituent elements."
  },
  {
    "id": "ch17-q25",
    "chapter": "Chapter 17",
    "sourceNumber": 25,
    "prompt": "Which term describes the amount of heat needed to increase the temperature of exactly 1 g of a substance by 1°C?",
    "options": [
      {
        "id": "A",
        "text": "Heat capacity"
      },
      {
        "id": "B",
        "text": "Specific heat"
      },
      {
        "id": "C",
        "text": "Enthalpy"
      },
      {
        "id": "D",
        "text": "Chemical potential energy"
      }
    ],
    "answer": "B",
    "explanation": "Specific heat describes the heat needed to raise 1 gram by 1°C."
  },
  {
    "id": "ch17-q26",
    "chapter": "Chapter 17",
    "sourceNumber": 26,
    "prompt": "The study of energy changes that occur during chemical reactions and changes in state is called:",
    "options": [
      {
        "id": "A",
        "text": "Calorimetry"
      },
      {
        "id": "B",
        "text": "Stoichiometry"
      },
      {
        "id": "C",
        "text": "Thermochemistry"
      },
      {
        "id": "D",
        "text": "Thermodynamics"
      }
    ],
    "answer": "C",
    "explanation": "Thermochemistry studies energy changes during reactions."
  },
  {
    "id": "ch17-q27",
    "chapter": "Chapter 17",
    "sourceNumber": 27,
    "prompt": "What is the definition of \"enthalpy (H)\"?",
    "options": [
      {
        "id": "A",
        "text": "The heat content of a system at constant pressure."
      },
      {
        "id": "B",
        "text": "The precise measurement of heat flow out of a system."
      },
      {
        "id": "C",
        "text": "Energy stored in chemical bonds."
      },
      {
        "id": "D",
        "text": "Everything in the universe outside of the system."
      }
    ],
    "answer": "A",
    "explanation": "Enthalpy is the heat content of a system specifically at constant pressure."
  },
  {
    "id": "ch17-q28",
    "chapter": "Chapter 17",
    "sourceNumber": 28,
    "prompt": "An insulated device used to measure the absorption or release of heat in chemical or physical processes is known as a(n):",
    "options": [
      {
        "id": "A",
        "text": "Standard hydrogen electrode"
      },
      {
        "id": "B",
        "text": "Calorimeter"
      },
      {
        "id": "C",
        "text": "Barometer"
      },
      {
        "id": "D",
        "text": "Cathode"
      }
    ],
    "answer": "B",
    "explanation": "A calorimeter is an insulated device to measure heat changes."
  },
  {
    "id": "ch17-q29",
    "chapter": "Chapter 17",
    "sourceNumber": 29,
    "prompt": "The enthalpy change for a chemical equation exactly as it is written is referred to as the:",
    "options": [
      {
        "id": "A",
        "text": "Standard heat of formation"
      },
      {
        "id": "B",
        "text": "Molar heat of vaporization"
      },
      {
        "id": "C",
        "text": "Heat of reaction"
      },
      {
        "id": "D",
        "text": "Heat capacity"
      }
    ],
    "answer": "C",
    "explanation": "Heat of reaction is the enthalpy change for the written equation."
  },
  {
    "id": "ch17-q30",
    "chapter": "Chapter 17",
    "sourceNumber": 30,
    "prompt": "Which term describes the amount of heat absorbed by one mole of a liquid as it vaporizes at a constant temperature?",
    "options": [
      {
        "id": "A",
        "text": "Molar heat of condensation (Δ H cond )"
      },
      {
        "id": "B",
        "text": "Molar heat of fusion (Δ H fus )"
      },
      {
        "id": "C",
        "text": "Molar heat of solution (Δ H soln )"
      },
      {
        "id": "D",
        "text": "Molar heat of vaporization (Δ H vap )"
      }
    ],
    "answer": "D",
    "explanation": "Molar heat of vaporization is heat absorbed as 1 mole vaporizes."
  },
  {
    "id": "ch17-q31",
    "chapter": "Chapter 17",
    "sourceNumber": 31,
    "prompt": "The change in enthalpy that accompanies the formation of one mole of a compound from its elements with all substances in their standard states at 25°C is called the:",
    "options": [
      {
        "id": "A",
        "text": "Standard heat of formation (Δ H f °)"
      },
      {
        "id": "B",
        "text": "Heat of combustion"
      },
      {
        "id": "C",
        "text": "Molar heat of solidification"
      },
      {
        "id": "D",
        "text": "Thermochemical equation"
      }
    ],
    "answer": "A",
    "explanation": "Standard heat of formation accompanies forming one mole of compound."
  },
  {
    "id": "ch17-q32",
    "chapter": "Chapter 17",
    "sourceNumber": 32,
    "prompt": "Energy that transfers from one object to another because of a temperature difference between the objects is known as:",
    "options": [
      {
        "id": "A",
        "text": "Heat (q)"
      },
      {
        "id": "B",
        "text": "Work"
      },
      {
        "id": "C",
        "text": "Specific heat"
      },
      {
        "id": "D",
        "text": "Chemical potential energy"
      }
    ],
    "answer": "A",
    "explanation": "Heat (q) transfers due to temperature differences."
  },
  {
    "id": "ch17-q33",
    "chapter": "Chapter 17",
    "sourceNumber": 33,
    "prompt": "What is the definition of an exothermic process?",
    "options": [
      {
        "id": "A",
        "text": "A process that absorbs heat from the surroundings."
      },
      {
        "id": "B",
        "text": "A process that releases heat to its surroundings."
      },
      {
        "id": "C",
        "text": "A process where energy is neither created nor destroyed."
      },
      {
        "id": "D",
        "text": "The precise measurement of heat flow out of a system."
      }
    ],
    "answer": "B",
    "explanation": "An exothermic process releases heat to surroundings."
  },
  {
    "id": "ch17-q34",
    "chapter": "Chapter 17",
    "sourceNumber": 34,
    "prompt": "The heat of reaction for the complete burning of one mole of a substance is the:",
    "options": [
      {
        "id": "A",
        "text": "Molar heat of fusion"
      },
      {
        "id": "B",
        "text": "Heat of combustion"
      },
      {
        "id": "C",
        "text": "Molar heat of solution"
      },
      {
        "id": "D",
        "text": "Standard heat of formation"
      }
    ],
    "answer": "B",
    "explanation": "Heat of combustion represents burning one mole."
  },
  {
    "id": "ch18-q1",
    "chapter": "Chapter 18",
    "sourceNumber": 1,
    "prompt": "According to the collision theory, what condition is necessary for reactant particles to successfully form products?",
    "options": [
      {
        "id": "A",
        "text": "The particles must avoid physical contact to prevent degradation."
      },
      {
        "id": "B",
        "text": "The particles must be heavily cooled before interaction."
      },
      {
        "id": "C",
        "text": "The particles must be contained in a biological enzyme."
      },
      {
        "id": "D",
        "text": "The particles must collide with a certain minimum amount of energy."
      }
    ],
    "answer": "D",
    "explanation": "Collision theory requires particles to hit with a specific minimum energy to react."
  },
  {
    "id": "ch18-q2",
    "chapter": "Chapter 18",
    "sourceNumber": 2,
    "prompt": "Why is activation energy often compared to a physical wall or barrier?",
    "options": [
      {
        "id": "E",
        "text": "Because it entirely prevents gases from mixing."
      },
      {
        "id": "F",
        "text": "Because reactant particles must possess enough energy to \"climb over\" it before products can form."
      },
      {
        "id": "G",
        "text": "Because it permanently traps the kinetic energy of the molecules."
      },
      {
        "id": "H",
        "text": "Because it physically separates reactants from products in a container."
      }
    ],
    "answer": "F",
    "explanation": "Reactant particles must possess sufficient energy to \"climb over\" the barrier."
  },
  {
    "id": "ch18-q3",
    "chapter": "Chapter 18",
    "sourceNumber": 3,
    "prompt": "How does the presence of a catalyst affect the rate of a chemical reaction?",
    "options": [
      {
        "id": "E",
        "text": "It increases the rate by providing an alternative mechanism with a lower activation energy."
      },
      {
        "id": "F",
        "text": "It decreases the rate by absorbing the kinetic energy of the reactants."
      },
      {
        "id": "G",
        "text": "It increases the rate by raising the temperature of the entire system."
      },
      {
        "id": "H",
        "text": "It has no effect on the rate but increases the product yield."
      }
    ],
    "answer": "E",
    "explanation": "Catalysts provide an alternative mechanism that inherently requires lower activation energy."
  },
  {
    "id": "ch18-q4",
    "chapter": "Chapter 18",
    "sourceNumber": 4,
    "prompt": "Which of the following statements regarding chemical reaction rates and biological systems is true?",
    "options": [
      {
        "id": "E",
        "text": "Increasing the temperature will consistently slow down a chemical reaction."
      },
      {
        "id": "F",
        "text": "Once a reaction starts, particles no longer need to collide."
      },
      {
        "id": "G",
        "text": "Enzymes function as biological catalysts."
      },
      {
        "id": "H",
        "text": "Catalysts are always consumed during the first-order reaction step."
      }
    ],
    "answer": "G",
    "explanation": "Enzymes are biological catalysts that speed up physiological processes."
  },
  {
    "id": "ch18-q5",
    "chapter": "Chapter 18",
    "sourceNumber": 5,
    "prompt": "A gas stove requires a spark or flame to ignite but continues to burn spontaneously once lit. What does this indicate about the relationship between temperature and reaction rate?",
    "options": [
      {
        "id": "E",
        "text": "The flame is a catalyst that permanently alters the gas molecules."
      },
      {
        "id": "F",
        "text": "Gas molecules are too cold to ever react without constant external heat."
      },
      {
        "id": "G",
        "text": "The flame raises the temperature and energy of collisions to start the reaction, and the exothermic heat released maintains it."
      },
      {
        "id": "H",
        "text": "Oxygen removes the activation energy barrier once the spark is introduced."
      }
    ],
    "answer": "G",
    "explanation": "Initial spark provides necessary collision energy; exothermic heat subsequently maintains it."
  },
  {
    "id": "ch18-q6",
    "chapter": "Chapter 18",
    "sourceNumber": 6,
    "prompt": "Which statement best defines a reversible reaction?",
    "options": [
      {
        "id": "E",
        "text": "A reaction where products completely disappear into a vacuum."
      },
      {
        "id": "F",
        "text": "A reaction that must be restarted manually once it reaches equilibrium."
      },
      {
        "id": "G",
        "text": "A reaction that only proceeds backwards after all reactants are consumed."
      },
      {
        "id": "H",
        "text": "A chemical process where reactants are continually forming products, and products are continually forming reactants."
      }
    ],
    "answer": "H",
    "explanation": "In reversible reactions, products continually form reactants while reactants continually form products."
  },
  {
    "id": "ch18-q7",
    "chapter": "Chapter 18",
    "sourceNumber": 7,
    "prompt": "When a dynamic chemical equilibrium is established, what is the relationship between the rates of the forward and reverse reactions?",
    "options": [
      {
        "id": "E",
        "text": "The forward reaction is substantially faster."
      },
      {
        "id": "F",
        "text": "The rates of the forward and reverse reactions are equal."
      },
      {
        "id": "G",
        "text": "Both reactions completely halt."
      },
      {
        "id": "H",
        "text": "The reverse reaction is substantially faster."
      }
    ],
    "answer": "F",
    "explanation": "Dynamic equilibrium occurs precisely when forward and reverse rates are equal."
  },
  {
    "id": "ch18-q8",
    "chapter": "Chapter 18",
    "sourceNumber": 8,
    "prompt": "Using Le Chatelier's principle, what causes a carbonated drink to go flat when the container is left open?",
    "options": [
      {
        "id": "E",
        "text": "The system relieves the stress of the opened container by allowing the CO2 gas above the liquid to escape, causing bubbles to leave the liquid to reestablish equilibrium."
      },
      {
        "id": "F",
        "text": "The liquid expands, absorbing the dissolved gases into the water molecules."
      },
      {
        "id": "G",
        "text": "The temperature of the room forces the equilibrium to favor solid precipitates."
      },
      {
        "id": "H",
        "text": "Atmospheric pressure crushes the carbon dioxide molecules."
      }
    ],
    "answer": "E",
    "explanation": "Escaping CO2 forces equilibrium to shift, releasing bubbles to replace the lost gas."
  },
  {
    "id": "ch18-q9",
    "chapter": "Chapter 18",
    "sourceNumber": 9,
    "prompt": "What is the correct expression for the equilibrium constant (Keq) for the reaction: PCl5(g) ⇌ PCl3(g) + Cl2(g)?",
    "options": [
      {
        "id": "E",
        "text": "Keq = [PCl5] / ([PCl3] * [Cl2])"
      },
      {
        "id": "F",
        "text": "Keq = ([PCl3] * [Cl2]) / [PCl5]"
      },
      {
        "id": "G",
        "text": "Keq = [PCl3] + [Cl2] / [PCl5]"
      },
      {
        "id": "H",
        "text": "Keq = [PCl5] * [PCl3] * [Cl2]"
      }
    ],
    "answer": "E",
    "explanation": "Keq = [PCl3][Cl2] / [PCl5] reflects products over reactants. Question Answer Justification / Calculation"
  },
  {
    "id": "ch18-q10",
    "chapter": "Chapter 18",
    "sourceNumber": 10,
    "prompt": "If a reaction has an equilibrium constant (Keq) of 1 x 10^2, what does this suggest about the favorability of product formation?",
    "options": [
      {
        "id": "E",
        "text": "Product formation is highly unfavorable."
      },
      {
        "id": "F",
        "text": "The reaction is nonspontaneous."
      },
      {
        "id": "G",
        "text": "The reaction will only produce reactants."
      },
      {
        "id": "H",
        "text": "Product formation is favorable."
      }
    ],
    "answer": "H",
    "explanation": "A large Keq (1 × 10^2 > 1) indicates that product formation is highly favorable."
  },
  {
    "id": "ch18-q11",
    "chapter": "Chapter 18",
    "sourceNumber": 11,
    "prompt": "What is the correct solubility product expression for the salt Nickel(II) sulfide (NiS)?",
    "options": [
      {
        "id": "E",
        "text": "Ksp = [Ni2+] / [S2-]"
      },
      {
        "id": "F",
        "text": "Ksp = [Ni2+] + [S2-]"
      },
      {
        "id": "G",
        "text": "Ksp = [Ni2+][S2-]"
      },
      {
        "id": "H",
        "text": "Ksp = [NiS] / ([Ni2+][S2-])"
      }
    ],
    "answer": "G",
    "explanation": "Solids are omitted; Ksp = [Ni2+][S2-]."
  },
  {
    "id": "ch18-q12",
    "chapter": "Chapter 18",
    "sourceNumber": 12,
    "prompt": "What does the solubility product constant (Ksp) mathematically represent?",
    "options": [
      {
        "id": "E",
        "text": "The product of the ion concentrations raised to the power of their coefficients."
      },
      {
        "id": "F",
        "text": "The total free energy released during dissolution."
      },
      {
        "id": "G",
        "text": "The specific rate constant of the solid forming."
      },
      {
        "id": "H",
        "text": "The exact mass of the solid dissolved in a supersaturated solution."
      }
    ],
    "answer": "E",
    "explanation": "Ksp mathematically is the product of ion concentrations raised to coefficient powers."
  },
  {
    "id": "ch18-q14",
    "chapter": "Chapter 18",
    "sourceNumber": 14,
    "prompt": "What effect does the addition of a common ion have on the solubility of another substance in the solution?",
    "options": [
      {
        "id": "A",
        "text": "It heavily increases the solubility."
      },
      {
        "id": "B",
        "text": "It has absolutely no effect."
      },
      {
        "id": "C",
        "text": "It reverses the equilibrium completely to a gas phase."
      },
      {
        "id": "D",
        "text": "It lowers the solubility."
      }
    ],
    "answer": "D",
    "explanation": "According to Le Chatelier, adding a common ion shifts equilibrium left, lowering solubility."
  },
  {
    "id": "ch18-q15",
    "chapter": "Chapter 18",
    "sourceNumber": 15,
    "prompt": "How does the free energy of a reaction help determine its spontaneity?",
    "options": [
      {
        "id": "E",
        "text": "A spontaneous reaction always has a positive free energy."
      },
      {
        "id": "F",
        "text": "A spontaneous reaction always has a negative free energy."
      },
      {
        "id": "G",
        "text": "A spontaneous reaction always has zero free energy."
      },
      {
        "id": "H",
        "text": "Free energy cannot predict spontaneity; only enthalpy can."
      }
    ],
    "answer": "F",
    "explanation": "Spontaneous reactions are characterized by a negative change in free energy."
  },
  {
    "id": "ch18-q16",
    "chapter": "Chapter 18",
    "sourceNumber": 16,
    "prompt": "What does the concept of entropy measure in a chemical system?",
    "options": [
      {
        "id": "E",
        "text": "The total thermal energy of the system."
      },
      {
        "id": "F",
        "text": "The degree of order or crystallization in a solid."
      },
      {
        "id": "G",
        "text": "The measure of disorder in a system."
      },
      {
        "id": "H",
        "text": "The kinetic energy of the specific rate constant."
      }
    ],
    "answer": "G",
    "explanation": "Entropy is defined as the measure of disorder in a system."
  },
  {
    "id": "ch18-q17",
    "chapter": "Chapter 18",
    "sourceNumber": 17,
    "prompt": "If the products in a spontaneous process are more ordered than the reactants, how is this entropy change described?",
    "options": [
      {
        "id": "E",
        "text": "It is considered a favorable entropy change."
      },
      {
        "id": "F",
        "text": "It indicates the reaction must be zero-order."
      },
      {
        "id": "G",
        "text": "It indicates the reaction is highly endothermic."
      },
      {
        "id": "H",
        "text": "It is considered an unfavorable entropy change."
      }
    ],
    "answer": "H",
    "explanation": "An increase in order represents a decrease in entropy, making it unfavorable."
  },
  {
    "id": "ch18-q18",
    "chapter": "Chapter 18",
    "sourceNumber": 18,
    "prompt": "Which of the following systems possesses lower entropy?",
    "options": [
      {
        "id": "E",
        "text": "A 50 mL sample of liquid water."
      },
      {
        "id": "F",
        "text": "A 50 mL sample of solid ice."
      },
      {
        "id": "G",
        "text": "Both have identical entropy."
      },
      {
        "id": "H",
        "text": "Entropy cannot be measured for water states."
      }
    ],
    "answer": "F",
    "explanation": "Solids possess a highly ordered crystalline structure, yielding lower entropy than liquids."
  },
  {
    "id": "ch18-q19",
    "chapter": "Chapter 18",
    "sourceNumber": 19,
    "prompt": "Predict the direction of the entropy change for the following synthesis reaction: NH3(g) + HCl(g) -> NH4Cl(s).",
    "options": [
      {
        "id": "E",
        "text": "Entropy decreases."
      },
      {
        "id": "F",
        "text": "Entropy increases."
      },
      {
        "id": "G",
        "text": "Entropy remains completely constant."
      },
      {
        "id": "H",
        "text": "Entropy becomes unpredictable."
      }
    ],
    "answer": "E",
    "explanation": "Two moles of gas forming one mole of solid results in a drastic decrease in entropy."
  },
  {
    "id": "ch18-q20",
    "chapter": "Chapter 18",
    "sourceNumber": 20,
    "prompt": "Is it accurate to say that all spontaneous processes must be exothermic?",
    "options": [
      {
        "id": "E",
        "text": "Yes, because heat must always be released to do work."
      },
      {
        "id": "F",
        "text": "Yes, endothermic processes can never happen on their own."
      },
      {
        "id": "G",
        "text": "No, some endothermic processes are spontaneous due to a highly favorable increase in entropy."
      },
      {
        "id": "H",
        "text": "No, because spontaneity is determined solely by the speed of the reaction."
      }
    ],
    "answer": "G",
    "explanation": "Endothermic processes can be spontaneous if accompanied by a highly favorable entropy increase."
  },
  {
    "id": "ch18-q21",
    "chapter": "Chapter 18",
    "sourceNumber": 21,
    "prompt": "Steam condenses to liquid water at normal atmospheric pressure, which is a decrease in entropy. Why does this happen spontaneously?",
    "options": [
      {
        "id": "A",
        "text": "Condensation is a highly endothermic process."
      },
      {
        "id": "B",
        "text": "The favorable exothermic change of the condensation process offsets the unfavorable entropy change."
      },
      {
        "id": "C",
        "text": "The liquid water has higher activation energy."
      },
      {
        "id": "D",
        "text": "Gases inherently prefer to be closely packed together regardless of temperature."
      }
    ],
    "answer": "B",
    "explanation": "Condensation is highly exothermic; this favorable enthalpy offsets unfavorable entropy."
  },
  {
    "id": "ch18-q22",
    "chapter": "Chapter 18",
    "sourceNumber": 22,
    "prompt": "What two thermodynamic factors work together to determine if a chemical reaction is spontaneous?",
    "options": [
      {
        "id": "A",
        "text": "Pressure change and volume change."
      },
      {
        "id": "B",
        "text": "Activation energy and collision frequency."
      },
      {
        "id": "C",
        "text": "Temperature and specific rate constant."
      },
      {
        "id": "D",
        "text": "Enthalpy change and entropy change."
      }
    ],
    "answer": "D",
    "explanation": "Enthalpy change and entropy change together dictate the free energy (spontaneity) of a reaction."
  },
  {
    "id": "ch18-q23",
    "chapter": "Chapter 18",
    "sourceNumber": 23,
    "prompt": "What is the definition of a specific rate constant?",
    "options": [
      {
        "id": "A",
        "text": "A proportionality constant that relates the concentrations of reactants to the rate of reaction."
      },
      {
        "id": "B",
        "text": "An expression relating the rate of a reaction to reactant concentrations."
      },
      {
        "id": "C",
        "text": "A reaction where rate is proportional to only one reactant."
      },
      {
        "id": "D",
        "text": "The constant that measures the disorder of a system."
      }
    ],
    "answer": "A",
    "explanation": "It acts as a proportionality constant relating concentration to rate."
  },
  {
    "id": "ch18-q24",
    "chapter": "Chapter 18",
    "sourceNumber": 24,
    "prompt": "If half of a reactant in a first-order reaction disappears in 50 minutes, how much total time is required for the reaction to be 75% complete?",
    "options": [
      {
        "id": "A",
        "text": "50 minutes"
      },
      {
        "id": "B",
        "text": "75 minutes"
      },
      {
        "id": "C",
        "text": "100 minutes"
      },
      {
        "id": "D",
        "text": "150 minutes"
      }
    ],
    "answer": "C",
    "explanation": "50 mins = 1 half-life (50% complete). 75% complete requires 2 half-lives (50 × 2 = 100 mins)."
  },
  {
    "id": "ch18-q25",
    "chapter": "Chapter 18",
    "sourceNumber": 25,
    "prompt": "On a reaction progress curve showing the energy profile of a mechanism, what does the peak of the curve represent?",
    "options": [
      {
        "id": "A",
        "text": "The total energy of the products."
      },
      {
        "id": "B",
        "text": "The baseline energy of the reactants."
      },
      {
        "id": "C",
        "text": "The overall change in enthalpy."
      },
      {
        "id": "D",
        "text": "The activation energy barrier."
      }
    ],
    "answer": "D",
    "explanation": "The energy profile peak represents the activation energy barrier."
  },
  {
    "id": "ch19-q1",
    "chapter": "Chapter 19",
    "sourceNumber": 1,
    "prompt": "According to the Arrhenius theory, how are acids defined?",
    "options": [
      {
        "id": "A",
        "text": "They are substances that accept a pair of electrons."
      },
      {
        "id": "B",
        "text": "They are substances that ionize to give hydrogen ions in aqueous solution."
      },
      {
        "id": "C",
        "text": "They are hydrogen-ion acceptors."
      },
      {
        "id": "D",
        "text": "They are substances that donate a pair of electrons to form a covalent bond."
      }
    ],
    "answer": "B",
    "explanation": "Arrhenius defined acids as substances ionizing to yield hydrogen ions in water."
  },
  {
    "id": "ch19-q2",
    "chapter": "Chapter 19",
    "sourceNumber": 2,
    "prompt": "What is the balanced equation for the dissociation of calcium hydroxide in water?",
    "options": [
      {
        "id": "A",
        "text": "Ca(OH) ₂ → Ca² ⁺ + 2OH ⁻"
      },
      {
        "id": "B",
        "text": "Ca(OH) ₂ + H ₂ O → Ca(OH) ₃"
      },
      {
        "id": "C",
        "text": "Ca + 2H ₂ O → Ca(OH) ₂ + H ₂"
      },
      {
        "id": "D",
        "text": "Ca(OH) ₂ → Ca ⁺ + OH ⁻"
      }
    ],
    "answer": "A",
    "explanation": "Calcium hydroxide completely dissociates into Ca2+ and 2OH- ions. Question Answer Justification / Calculation"
  },
  {
    "id": "ch19-q3",
    "chapter": "Chapter 19",
    "sourceNumber": 3,
    "prompt": "In the reaction HCl + H ₂ O ⇌ H ₃ O ⁺ + Cl ⁻, which reactant acts as the Brønsted-Lowry base (hydrogen-ion acceptor)?",
    "options": [
      {
        "id": "A",
        "text": "HCl"
      },
      {
        "id": "B",
        "text": "H ₃ O ⁺"
      },
      {
        "id": "C",
        "text": "Cl ⁻"
      },
      {
        "id": "D",
        "text": "H ₂ O"
      }
    ],
    "answer": "D",
    "explanation": "H2O acts as the base by accepting a proton to form H3O+."
  },
  {
    "id": "ch19-q4",
    "chapter": "Chapter 19",
    "sourceNumber": 4,
    "prompt": "Why is the Lewis theory considered more general than the Arrhenius and Brønsted-Lowry theories?",
    "options": [
      {
        "id": "A",
        "text": "It strictly applies only to neutral solutions."
      },
      {
        "id": "B",
        "text": "It requires all acids to contain an oxygen atom."
      },
      {
        "id": "C",
        "text": "It explains the behavior of compounds that act like bases without accepting hydrogen ions or act like acids without donating hydrogen ions."
      },
      {
        "id": "D",
        "text": "It only applies to reactions involving a strong acid and a strong base."
      }
    ],
    "answer": "C",
    "explanation": "Lewis theory covers compounds acting as bases/acids via electron pair donation/acceptance without H+ exchange."
  },
  {
    "id": "ch19-q5",
    "chapter": "Chapter 19",
    "sourceNumber": 5,
    "prompt": "What are the concentrations of H ⁺ and OH ⁻ in pure water at 25°C?",
    "options": [
      {
        "id": "A",
        "text": "1.0 × 10 ⁻ ¹ ⁴ M for both H ⁺ and OH ⁻"
      },
      {
        "id": "B",
        "text": "7.0 × 10 ⁻⁷ M for both H ⁺ and OH ⁻"
      },
      {
        "id": "C",
        "text": "1.0 × 10 ⁻⁷ M for both H ⁺ and OH ⁻"
      },
      {
        "id": "D",
        "text": "1.0 × 10 ⁻ ¹ M for both H ⁺ and OH ⁻"
      }
    ],
    "answer": "C",
    "explanation": "In neutral pure water, [H+] and [OH-] both equal 1.0 × 10^-7 M."
  },
  {
    "id": "ch19-q6",
    "chapter": "Chapter 19",
    "sourceNumber": 6,
    "prompt": "If a solution has a hydrogen-ion concentration [H ⁺ ] of 1.0 × 10 ⁻ ³ M, what is its pH and what type of solution is it?",
    "options": [
      {
        "id": "A",
        "text": "pH = 3.00; basic"
      },
      {
        "id": "B",
        "text": "pH = 11.00; acidic"
      },
      {
        "id": "C",
        "text": "pH = 3.00; acidic"
      },
      {
        "id": "D",
        "text": "pH = 11.00; basic"
      }
    ],
    "answer": "C",
    "explanation": "pH = -log(1.0 × 10^-3) = 3.00; solutions below 7 are acidic."
  },
  {
    "id": "ch19-q7",
    "chapter": "Chapter 19",
    "sourceNumber": 7,
    "prompt": "What is the hydroxide-ion concentration [OH ⁻ ] for a solution that has a pH of 9.00?",
    "options": [
      {
        "id": "A",
        "text": "1.0 × 10 ⁻⁵ M"
      },
      {
        "id": "B",
        "text": "1.0 × 10 ⁻⁹ M"
      },
      {
        "id": "C",
        "text": "1.0 × 10 ⁻⁷ M"
      },
      {
        "id": "D",
        "text": "1.0 × 10 ⁻ ¹ ⁴ M"
      }
    ],
    "answer": "A",
    "explanation": "pH + pOH = 14. pOH = 5. [OH-] = 10^-5 = 1.0 × 10^-5 M."
  },
  {
    "id": "ch19-q8",
    "chapter": "Chapter 19",
    "sourceNumber": 8,
    "prompt": "Which of the following best describes the acid dissociation constant (Ka) of a strong acid?",
    "options": [
      {
        "id": "A",
        "text": "A strong acid has a very small Ka because it is completely dissociated."
      },
      {
        "id": "B",
        "text": "A strong acid has a very large Ka because it is completely dissociated."
      },
      {
        "id": "C",
        "text": "Ka is exactly 1.0 for all strong acids."
      },
      {
        "id": "D",
        "text": "Strong acids do not have a Ka because they do not dissolve in water."
      }
    ],
    "answer": "B",
    "explanation": "Strong acids dissociate completely, resulting in a large product-to-reactant ratio (large Ka)."
  },
  {
    "id": "ch19-q9",
    "chapter": "Chapter 19",
    "sourceNumber": 9,
    "prompt": "Assuming only one hydrogen is ionized, what is the correct equilibrium expression for the acid dissociation constant (Ka) of hydrocyanic acid (HCN)?",
    "options": [
      {
        "id": "A",
        "text": "Ka = [H ⁺ ][OH ⁻ ]"
      },
      {
        "id": "B",
        "text": "Ka = [HCN] / ([H ⁺ ][CN ⁻ ])"
      },
      {
        "id": "C",
        "text": "Ka = [H ⁺ ][CN ⁻ ] / [HCN]"
      },
      {
        "id": "D",
        "text": "Ka = [CN ⁻ ] / [H ⁺ ]"
      }
    ],
    "answer": "C",
    "explanation": "Ka = [Products]/[Reactants] = [H+][CN-]/[HCN]."
  },
  {
    "id": "ch19-q10",
    "chapter": "Chapter 19",
    "sourceNumber": 10,
    "prompt": "What are the expected products of a general neutralization reaction?",
    "options": [
      {
        "id": "A",
        "text": "A salt and water"
      },
      {
        "id": "B",
        "text": "A weak acid and a weak base"
      },
      {
        "id": "C",
        "text": "Hydrogen gas and a metallic oxide"
      },
      {
        "id": "D",
        "text": "A strong base and water"
      }
    ],
    "answer": "A",
    "explanation": "Neutralization between an acid and a base yields a salt and water."
  },
  {
    "id": "ch19-q11",
    "chapter": "Chapter 19",
    "sourceNumber": 11,
    "prompt": "During an acid-base titration, what signals that the end point has been reached?",
    "options": [
      {
        "id": "A",
        "text": "A precipitate forms at the bottom of the flask."
      },
      {
        "id": "B",
        "text": "The number of moles of hydrogen ions exactly equals the number of moles of hydroxide ions."
      },
      {
        "id": "C",
        "text": "The indicator changes color."
      },
      {
        "id": "D",
        "text": "The solution completely evaporates."
      }
    ],
    "answer": "C",
    "explanation": "Visual indicators change color to signal the endpoint of the titration."
  },
  {
    "id": "ch19-q12",
    "chapter": "Chapter 19",
    "sourceNumber": 12,
    "prompt": "What is the molarity of a sodium hydroxide (NaOH) solution if 40.0 mL of the solution is completely neutralized by 20.0 mL of a 0.50 M HCl solution?",
    "options": [
      {
        "id": "A",
        "text": "0.25 M"
      },
      {
        "id": "B",
        "text": "0.50 M"
      },
      {
        "id": "C",
        "text": "1.00 M"
      },
      {
        "id": "D",
        "text": "0.15 M"
      }
    ],
    "answer": "A",
    "explanation": "MaVa = MbVb. 0.50 × 20.0 = Mb × 40.0. Mb = 0.25 M."
  },
  {
    "id": "ch19-q13",
    "chapter": "Chapter 19",
    "sourceNumber": 13,
    "prompt": "Why does an aqueous solution of sodium carbonate (Na ₂ CO ₃ ) have a basic pH?",
    "options": [
      {
        "id": "A",
        "text": "Weak-base cations donate protons to water, decreasing the pH."
      },
      {
        "id": "B",
        "text": "Weak-acid anions accept protons from water, increasing the pH."
      },
      {
        "id": "C",
        "text": "Strong-acid anions dissociate completely, lowering the pH."
      },
      {
        "id": "D",
        "text": "The salt prevents the self-ionization of water entirely."
      }
    ],
    "answer": "B",
    "explanation": "Weak-acid carbonate anions undergo hydrolysis, accepting water protons and increasing hydroxide/pH."
  },
  {
    "id": "ch19-q14",
    "chapter": "Chapter 19",
    "sourceNumber": 14,
    "prompt": "Why can a buffered solution NOT absorb an unlimited amount of acid or base?",
    "options": [
      {
        "id": "A",
        "text": "Buffers are only capable of neutralizing strong acids, not strong bases."
      },
      {
        "id": "B",
        "text": "Eventually the buffer capacity is exceeded, causing the pH to change significantly."
      },
      {
        "id": "C",
        "text": "The common ion effect causes the buffer to precipitate into a solid."
      },
      {
        "id": "D",
        "text": "Buffers only function efficiently at a pH of exactly 7.00."
      }
    ],
    "answer": "B",
    "explanation": "Once the buffer capacity is exceeded, pH begins to change significantly."
  },
  {
    "id": "ch19-q15",
    "chapter": "Chapter 19",
    "sourceNumber": 15,
    "prompt": "What term is used for a substance that can act as both an acid and a base?",
    "options": [
      {
        "id": "A",
        "text": "Diprotic"
      },
      {
        "id": "B",
        "text": "Neutral"
      },
      {
        "id": "C",
        "text": "Amphoteric"
      },
      {
        "id": "D",
        "text": "Conjugate"
      }
    ],
    "answer": "C",
    "explanation": "Amphoteric substances can act as both proton donors and acceptors."
  },
  {
    "id": "ch19-q16",
    "chapter": "Chapter 19",
    "sourceNumber": 16,
    "prompt": "Which term describes the negative ion formed when a water molecule loses a hydrogen ion?",
    "options": [
      {
        "id": "A",
        "text": "Hydronium ion"
      },
      {
        "id": "B",
        "text": "Hydroxide ion"
      },
      {
        "id": "C",
        "text": "Conjugate acid"
      },
      {
        "id": "D",
        "text": "Lewis base"
      }
    ],
    "answer": "B",
    "explanation": "A water molecule minus H+ leaves OH- (hydroxide ion)."
  },
  {
    "id": "ch19-q17",
    "chapter": "Chapter 19",
    "sourceNumber": 17,
    "prompt": "What is an acid that contains three ionizable protons called?",
    "options": [
      {
        "id": "A",
        "text": "Monoprotic acid"
      },
      {
        "id": "B",
        "text": "Diprotic acid"
      },
      {
        "id": "C",
        "text": "Triprotic acid"
      },
      {
        "id": "D",
        "text": "Strong acid"
      }
    ],
    "answer": "C",
    "explanation": "\"Tri-\" denotes three ionizable protons."
  },
  {
    "id": "ch19-q18",
    "chapter": "Chapter 19",
    "sourceNumber": 18,
    "prompt": "Which term represents the product of the concentrations of hydrogen ions and hydroxide ions in water (1 × 10 ⁻ ¹ ⁴ at 25°C)?",
    "options": [
      {
        "id": "A",
        "text": "Acid dissociation constant (Ka)"
      },
      {
        "id": "B",
        "text": "Base dissociation constant (Kb)"
      },
      {
        "id": "C",
        "text": "Ion-product constant for water (Kw)"
      },
      {
        "id": "D",
        "text": "Standard cell potential"
      }
    ],
    "answer": "C",
    "explanation": "Kw is the ion-product constant for water (1 × 10^-14)."
  },
  {
    "id": "ch19-q19",
    "chapter": "Chapter 19",
    "sourceNumber": 19,
    "prompt": "What do you call a measure of the amount of acid or base that may be added to a buffer solution before a significant change in pH occurs?",
    "options": [
      {
        "id": "A",
        "text": "Buffer capacity"
      },
      {
        "id": "B",
        "text": "Titration limit"
      },
      {
        "id": "C",
        "text": "End point"
      },
      {
        "id": "D",
        "text": "Equivalence point Term"
      }
    ],
    "answer": "A",
    "explanation": "Buffer capacity defines the limit of addition before significant pH shifts occur."
  },
  {
    "id": "ch20-q1",
    "chapter": "Chapter 20",
    "sourceNumber": 1,
    "prompt": "What chemical process must always accompany an oxidation process?",
    "options": [
      {
        "id": "A",
        "text": "Combustion"
      },
      {
        "id": "B",
        "text": "Neutralization"
      },
      {
        "id": "C",
        "text": "Reduction"
      },
      {
        "id": "D",
        "text": "Sublimation"
      }
    ],
    "answer": "C",
    "explanation": "Oxidation and reduction must always occur simultaneously."
  },
  {
    "id": "ch20-q2",
    "chapter": "Chapter 20",
    "sourceNumber": 2,
    "prompt": "What happens to a reducing agent during a redox reaction?",
    "options": [
      {
        "id": "A",
        "text": "The reducing agent is oxidized."
      },
      {
        "id": "B",
        "text": "The reducing agent is reduced."
      },
      {
        "id": "C",
        "text": "It gains electrons."
      },
      {
        "id": "D",
        "text": "Its oxidation number decreases."
      }
    ],
    "answer": "A",
    "explanation": "A reducing agent donates electrons, thus undergoing oxidation."
  },
  {
    "id": "ch20-q3",
    "chapter": "Chapter 20",
    "sourceNumber": 3,
    "prompt": "Balance the redox equation and identify whether the first substance was oxidized or reduced: Mg(s) + O ₂ (g) → MgO(s)",
    "options": [
      {
        "id": "A",
        "text": "Mg(s) + O ₂ (g) → MgO ₂ (s) ; magnesium is reduced"
      },
      {
        "id": "B",
        "text": "2Mg(s) + O ₂ (g) → 2MgO(s) ; magnesium is oxidized"
      },
      {
        "id": "C",
        "text": "2Mg(s) + 2O ₂ (g) → 2MgO(s) ; oxygen is oxidized"
      },
      {
        "id": "D",
        "text": "Mg(s) + O ₂ (g) → 2MgO(s) ; magnesium is oxidized"
      }
    ],
    "answer": "B",
    "explanation": "Balanced: 2Mg + O2 → 2MgO. Mg goes from 0 to +2 (oxidized)."
  },
  {
    "id": "ch20-q4",
    "chapter": "Chapter 20",
    "sourceNumber": 4,
    "prompt": "Identify the following process as either oxidation or reduction: Cu² ⁺ + 2e ⁻ → Cu",
    "options": [
      {
        "id": "A",
        "text": "Oxidation"
      },
      {
        "id": "B",
        "text": "Reduction"
      },
      {
        "id": "C",
        "text": "Both oxidation and reduction"
      },
      {
        "id": "D",
        "text": "Neither oxidation nor reduction"
      }
    ],
    "answer": "B",
    "explanation": "Gaining electrons (2e- on reactant side) strictly defines reduction."
  },
  {
    "id": "ch20-q5",
    "chapter": "Chapter 20",
    "sourceNumber": 5,
    "prompt": "Which of the following would most likely be a reducing agent? (Hint: Think in terms of tendencies to lose or gain electrons based on electronegativity.)",
    "options": [
      {
        "id": "A",
        "text": "F ₂"
      },
      {
        "id": "B",
        "text": "O ₂"
      },
      {
        "id": "C",
        "text": "Na"
      },
      {
        "id": "D",
        "text": "Cl ₂"
      }
    ],
    "answer": "C",
    "explanation": "Sodium (Na) has low electronegativity and highly tends to lose electrons (acts as reducing agent)."
  },
  {
    "id": "ch20-q6",
    "chapter": "Chapter 20",
    "sourceNumber": 6,
    "prompt": "Determine which reactant is oxidized, which is reduced, and identify the agents for the following reaction: Zn(s) + 2HCl(aq) → ZnCl ₂ (aq) + H ₂ (g)",
    "options": [
      {
        "id": "A",
        "text": "Zn is oxidized (reducing agent); H ⁺ is reduced (oxidizing agent)."
      },
      {
        "id": "B",
        "text": "Zn is reduced (oxidizing agent); H ⁺ is oxidized (reducing agent)."
      },
      {
        "id": "C",
        "text": "Cl ⁻ is oxidized (reducing agent); Zn is reduced (oxidizing agent)."
      },
      {
        "id": "D",
        "text": "H ⁺ is oxidized (oxidizing agent); Zn is reduced (reducing agent)."
      }
    ],
    "answer": "A",
    "explanation": "Zn goes from 0 to +2 (oxidized/reducing agent); H goes from +1 to 0 (reduced/oxidizing agent)."
  },
  {
    "id": "ch20-q7",
    "chapter": "Chapter 20",
    "sourceNumber": 7,
    "prompt": "Which of the following best defines an oxidation number?",
    "options": [
      {
        "id": "A",
        "text": "The exact number of electrons an atom possesses in a molecule."
      },
      {
        "id": "B",
        "text": "The total number of bonds an atom makes in a compound."
      },
      {
        "id": "C",
        "text": "The charge an atom would have if the electrons in each bond were assigned to the atoms of the more electronegative element."
      },
      {
        "id": "D",
        "text": "The number of protons minus the number of neutrons."
      }
    ],
    "answer": "C",
    "explanation": "Oxidation number assumes bonds are assigned to the more electronegative element."
  },
  {
    "id": "ch20-q8",
    "chapter": "Chapter 20",
    "sourceNumber": 8,
    "prompt": "Which of these statements is false?",
    "options": [
      {
        "id": "A",
        "text": "The sum of the oxidation numbers of the atoms in a polyatomic ion must equal the charge of the ion."
      },
      {
        "id": "B",
        "text": "The oxidation number of an uncombined element is zero."
      },
      {
        "id": "C",
        "text": "The oxidation number of oxygen in a compound or polyatomic ion is almost always +2."
      },
      {
        "id": "D",
        "text": "Fluorine always has an oxidation number of -1 in its compounds."
      }
    ],
    "answer": "C",
    "explanation": "The oxidation number of oxygen is almost always -2, not +2."
  },
  {
    "id": "ch20-q9",
    "chapter": "Chapter 20",
    "sourceNumber": 9,
    "prompt": "Determine the oxidation number of the transition metal atom in KMnO ₄.",
    "options": [
      {
        "id": "A",
        "text": "+1"
      },
      {
        "id": "B",
        "text": "+2"
      },
      {
        "id": "C",
        "text": "+5"
      },
      {
        "id": "D",
        "text": "+7"
      }
    ],
    "answer": "D",
    "explanation": "K = +1, O = -2(4) = -8. To maintain neutral charge, Mn must be +7."
  },
  {
    "id": "ch20-q10",
    "chapter": "Chapter 20",
    "sourceNumber": 10,
    "prompt": "Assign oxidation numbers to the atoms in the sulfate ion (SO ₄ ² ⁻ ).",
    "options": [
      {
        "id": "A",
        "text": "S = +6; O = -2"
      },
      {
        "id": "B",
        "text": "S = +4; O = -2"
      },
      {
        "id": "C",
        "text": "S = +8; O = -2"
      },
      {
        "id": "D",
        "text": "S = -2; O = +1"
      }
    ],
    "answer": "A",
    "explanation": "For the sulfate ion (SO4^2-), O is -2. -2(4) = -8. Overall charge is -2, so S = +6."
  },
  {
    "id": "ch20-q11",
    "chapter": "Chapter 20",
    "sourceNumber": 11,
    "prompt": "Use the changes in oxidation numbers to identify which atoms are oxidized and which are reduced in the reaction: 2Fe³ ⁺ (aq) + Sn² ⁺ (aq) → 2Fe² ⁺ (aq) + Sn ⁴⁺ (aq)",
    "options": [
      {
        "id": "A",
        "text": "Fe³ ⁺ is oxidized; Sn² ⁺ is reduced."
      },
      {
        "id": "B",
        "text": "Sn² ⁺ is oxidized; Fe³ ⁺ is reduced."
      },
      {
        "id": "C",
        "text": "Both Fe³ ⁺ and Sn² ⁺ are oxidized."
      },
      {
        "id": "D",
        "text": "Both Fe³ ⁺ and Sn² ⁺ are reduced."
      }
    ],
    "answer": "B",
    "explanation": "Sn2+ increases to Sn4+ (oxidized); Fe3+ decreases to Fe2+ (reduced)."
  },
  {
    "id": "ch20-q12",
    "chapter": "Chapter 20",
    "sourceNumber": 12,
    "prompt": "Balance the following redox equation: Na(s) + Cl ₂ (g) → NaCl(s)",
    "options": [
      {
        "id": "A",
        "text": "Na(s) + Cl ₂ (g) → NaCl ₂ (s)"
      },
      {
        "id": "B",
        "text": "2Na(s) + 2Cl ₂ (g) → 2NaCl(s)"
      },
      {
        "id": "C",
        "text": "2Na(s) + Cl ₂ (g) → 2NaCl(s)"
      },
      {
        "id": "D",
        "text": "Na(s) + 2Cl ₂ (g) → NaCl ₄ (s)"
      }
    ],
    "answer": "C",
    "explanation": "Proper stoichiometric balancing yields 2Na(s) + Cl2(g) → 2NaCl(s)."
  },
  {
    "id": "ch20-q13",
    "chapter": "Chapter 20",
    "sourceNumber": 13,
    "prompt": "Which of the following unbalanced equations represents a redox reaction?",
    "options": [
      {
        "id": "A",
        "text": "HCl(aq) + NaOH(aq) → NaCl(aq) + H ₂ O(l)"
      },
      {
        "id": "B",
        "text": "C(s) + O ₂ (g) → CO ₂ (g)"
      },
      {
        "id": "C",
        "text": "CaCO ₃ (s) → CaO(s) + CO ₂ (g)"
      },
      {
        "id": "D",
        "text": "AgNO ₃ (aq) + NaCl(aq) → AgCl(s) + NaNO ₃ (aq)"
      }
    ],
    "answer": "B",
    "explanation": "Carbon and oxygen elements (both 0) combine to form a compound, necessitating oxidation states changes."
  },
  {
    "id": "ch20-q14",
    "chapter": "Chapter 20",
    "sourceNumber": 14,
    "prompt": "Use the half-reaction method to identify the balanced ionic equation for the following reaction in a basic solution: CN ⁻ (aq) + MnO ₄⁻ (aq) → CNO ⁻ (aq) + MnO ₂ (s)",
    "options": [
      {
        "id": "A",
        "text": "3CN ⁻ (aq) + 2MnO ₄⁻ (aq) + H ₂ O(l) → 3CNO ⁻ (aq) + 2MnO ₂ (s) + 2OH ⁻ (aq)"
      },
      {
        "id": "B",
        "text": "CN ⁻ (aq) + MnO ₄⁻ (aq) → CNO ⁻ (aq) + MnO ₂ (s)"
      },
      {
        "id": "C",
        "text": "3CN ⁻ (aq) + 2MnO ₄⁻ (aq) + 2H ⁺ (aq) → 3CNO ⁻ (aq) + 2MnO ₂ (s) + H ₂ O(l)"
      },
      {
        "id": "D",
        "text": "2CN ⁻ (aq) + 3MnO ₄⁻ (aq) + 3H ₂ O(l) → 2CNO ⁻ (aq) + 3MnO ₂ (s) + 6OH ⁻ (aq)"
      }
    ],
    "answer": "A",
    "explanation": "The half-reaction method in basic solution balances O with water and H with OH-, producing 3CN- + 2MnO4- + H2O → 3CNO- + 2MnO2 + 2OH-."
  },
  {
    "id": "ch20-q15",
    "chapter": "Chapter 20",
    "sourceNumber": 15,
    "prompt": "Which term describes a process that involves a complete or partial gain of electrons or the loss of oxygen?",
    "options": [
      {
        "id": "A",
        "text": "Oxidation"
      },
      {
        "id": "B",
        "text": "Reduction"
      },
      {
        "id": "C",
        "text": "Electrolysis"
      },
      {
        "id": "D",
        "text": "Sublimation"
      }
    ],
    "answer": "B",
    "explanation": "Reduction is the gain of electrons or the loss of oxygen. Question Answer Justification / Calculation"
  },
  {
    "id": "ch20-q16",
    "chapter": "Chapter 20",
    "sourceNumber": 16,
    "prompt": "What do we call the substance in a redox reaction that accepts electrons?",
    "options": [
      {
        "id": "A",
        "text": "Reducing agent"
      },
      {
        "id": "B",
        "text": "Catalyst"
      },
      {
        "id": "C",
        "text": "Oxidizing agent"
      },
      {
        "id": "D",
        "text": "Common ion"
      }
    ],
    "answer": "C",
    "explanation": "The oxidizing agent itself accepts electrons."
  },
  {
    "id": "ch20-q17",
    "chapter": "Chapter 20",
    "sourceNumber": 17,
    "prompt": "What is an equation showing either the oxidation or the reduction that takes place in a redox reaction?",
    "options": [
      {
        "id": "A",
        "text": "Reaction mechanism"
      },
      {
        "id": "B",
        "text": "Net ionic equation"
      },
      {
        "id": "C",
        "text": "Thermochemical equation"
      },
      {
        "id": "D",
        "text": "Half-reaction"
      }
    ],
    "answer": "D",
    "explanation": "Half-reactions show isolated oxidation or reduction steps."
  },
  {
    "id": "ch20-q18",
    "chapter": "Chapter 20",
    "sourceNumber": 18,
    "prompt": "Which method involves balancing a redox equation by comparing the increases and decreases in oxidation numbers?",
    "options": [
      {
        "id": "A",
        "text": "Half-reaction method"
      },
      {
        "id": "B",
        "text": "Oxidation-number-change method"
      },
      {
        "id": "C",
        "text": "Specific rate constant method"
      },
      {
        "id": "D",
        "text": "Common ion effect"
      }
    ],
    "answer": "B",
    "explanation": "The oxidation-number-change method directly compares number increases and decreases."
  },
  {
    "id": "ch21-q1",
    "chapter": "Chapter 21",
    "sourceNumber": 1,
    "prompt": "If a piece of solid silver is submerged in a solution of zinc nitrate, what is the expected outcome based on their relative reactivities?",
    "options": [
      {
        "id": "A",
        "text": "Silver will be oxidized."
      },
      {
        "id": "B",
        "text": "No reaction will occur."
      },
      {
        "id": "C",
        "text": "Zinc metal will precipitate."
      },
      {
        "id": "D",
        "text": "Hydrogen gas will be released."
      }
    ],
    "answer": "B",
    "explanation": "Silver is less reactive than zinc, resulting in no spontaneous redox reaction."
  },
  {
    "id": "ch21-q2",
    "chapter": "Chapter 21",
    "sourceNumber": 2,
    "prompt": "Which of the following metals has the greatest tendency to undergo oxidation compared to the others?",
    "options": [
      {
        "id": "A",
        "text": "Copper (Cu)"
      },
      {
        "id": "B",
        "text": "Magnesium (Mg)"
      },
      {
        "id": "C",
        "text": "Silver (Ag)"
      },
      {
        "id": "D",
        "text": "Mercury (Hg)"
      }
    ],
    "answer": "B",
    "explanation": "Magnesium sits highest among these options on the activity series."
  },
  {
    "id": "ch21-q3",
    "chapter": "Chapter 21",
    "sourceNumber": 3,
    "prompt": "In any functioning electrochemical cell, the process of gaining electrons strictly takes place at the:",
    "options": [
      {
        "id": "A",
        "text": "Cathode"
      },
      {
        "id": "B",
        "text": "Anode"
      },
      {
        "id": "C",
        "text": "Salt bridge"
      },
      {
        "id": "D",
        "text": "Voltmeter"
      }
    ],
    "answer": "A",
    "explanation": "Reduction (gain of electrons) inherently happens at the cathode."
  },
  {
    "id": "ch21-q4",
    "chapter": "Chapter 21",
    "sourceNumber": 4,
    "prompt": "What is the primary purpose of a salt bridge in a standard voltaic cell?",
    "options": [
      {
        "id": "A",
        "text": "To supply the activation energy required to start the redox reaction."
      },
      {
        "id": "B",
        "text": "To provide a pathway for electrons to flow between the two electrodes."
      },
      {
        "id": "C",
        "text": "To maintain electrical neutrality by allowing ions to flow without mixing the solutions."
      },
      {
        "id": "D",
        "text": "To prevent the migration of ions between the half-cells completely."
      }
    ],
    "answer": "C",
    "explanation": "The bridge maintains electrical neutrality via ion flow without fluid mixing."
  },
  {
    "id": "ch21-q5",
    "chapter": "Chapter 21",
    "sourceNumber": 5,
    "prompt": "In a standard dry cell battery commonly used in household items, which materials typically serve as the anode and cathode, respectively?",
    "options": [
      {
        "id": "A",
        "text": "Carbon/graphite (anode) and manganese dioxide (cathode)"
      },
      {
        "id": "B",
        "text": "Copper (anode) and zinc (cathode)"
      },
      {
        "id": "C",
        "text": "Lead (anode) and lead(IV) oxide (cathode)"
      },
      {
        "id": "D",
        "text": "Zinc (anode) and carbon/graphite (cathode)"
      }
    ],
    "answer": "D",
    "explanation": "A standard dry cell utilizes a zinc outer anode and a central carbon/graphite rod cathode."
  },
  {
    "id": "ch21-q6",
    "chapter": "Chapter 21",
    "sourceNumber": 6,
    "prompt": "As a traditional lead storage car battery discharges, why does the specific gravity (density) of its electrolyte solution drop?",
    "options": [
      {
        "id": "A",
        "text": "Sulfuric acid is consumed and water is produced, leaving a liquid with a lower density."
      },
      {
        "id": "B",
        "text": "Solid lead dissolves into the solution, decreasing its mass."
      },
      {
        "id": "C",
        "text": "The lead sulfate produced is highly soluble and lighter than sulfuric acid."
      },
      {
        "id": "D",
        "text": "Hydrogen and oxygen gases bubble out, removing mass from the liquid."
      }
    ],
    "answer": "A",
    "explanation": "Discharging consumes dense sulfuric acid and yields water, lowering solution density."
  },
  {
    "id": "ch21-q7",
    "chapter": "Chapter 21",
    "sourceNumber": 7,
    "prompt": "Which shorthand notation correctly outlines the active solid components of a discharging lead-acid storage battery?",
    "options": [
      {
        "id": "A",
        "text": "Zn(s) | Zn2+(aq) || Cu2+(aq) | Cu(s)"
      },
      {
        "id": "B",
        "text": "Pb(s) | PbSO4(s) || PbO2(s) | PbSO4(s)"
      },
      {
        "id": "C",
        "text": "PbO2(s) | Pb(s) || PbSO4(s) | H2O(l)"
      },
      {
        "id": "D",
        "text": "Pt(s) | H2(g) || O2(g) | H2O(l)"
      }
    ],
    "answer": "B",
    "explanation": "The active solid materials are Pb and PbSO4 at the anode, and PbO2 and PbSO4 at Question Answer Justification / Calculation the cathode."
  },
  {
    "id": "ch21-q8",
    "chapter": "Chapter 21",
    "sourceNumber": 8,
    "prompt": "Despite producing nearly zero emissions, hydrogen fuel cells are not yet the dominant power source for commercial electricity. What is the primary reason for this?",
    "options": [
      {
        "id": "A",
        "text": "They are currently less economical to operate than conventional electrical generation methods."
      },
      {
        "id": "B",
        "text": "They produce highly toxic solid waste that is hard to dispose of."
      },
      {
        "id": "C",
        "text": "The chemical reactions involved violate the laws of thermodynamics."
      },
      {
        "id": "D",
        "text": "They must be continuously recharged from a wall outlet to function."
      }
    ],
    "answer": "A",
    "explanation": "Hydrogen fuel cell operation remains less economical than conventional energy generation."
  },
  {
    "id": "ch21-q9",
    "chapter": "Chapter 21",
    "sourceNumber": 9,
    "prompt": "Which of the following represents a major advantage of a hydrogen fuel cell compared to a traditional lead storage battery?",
    "options": [
      {
        "id": "A",
        "text": "It requires frequent recharging by reversing the electrical current."
      },
      {
        "id": "B",
        "text": "It is much heavier, providing better stability for vehicles."
      },
      {
        "id": "C",
        "text": "It relies on a concentrated sulfuric acid electrolyte, which is cheap."
      },
      {
        "id": "D",
        "text": "It does not need recharging as long as fuel is supplied, and its primary byproduct is water."
      }
    ],
    "answer": "D",
    "explanation": "Fuel cells operate continuously as long as fuel is supplied, creating only water as a byproduct."
  },
  {
    "id": "ch21-q10",
    "chapter": "Chapter 21",
    "sourceNumber": 10,
    "prompt": "How do chemists know that the standard reduction potential of the standard hydrogen electrode is exactly 0.00 V?",
    "options": [
      {
        "id": "A",
        "text": "It was measured using a perfectly frictionless voltmeter."
      },
      {
        "id": "B",
        "text": "It was arbitrarily assigned this value to serve as a universal reference point."
      },
      {
        "id": "C",
        "text": "It was calculated using the ideal gas law at 298 K."
      },
      {
        "id": "D",
        "text": "It is the exact amount of energy released when a single hydrogen bond breaks."
      }
    ],
    "answer": "B",
    "explanation": "The standard hydrogen electrode was arbitrarily assigned 0.00 V to act as a universal reference."
  },
  {
    "id": "ch21-q11",
    "chapter": "Chapter 21",
    "sourceNumber": 11,
    "prompt": "How is the electric potential of a cell best described?",
    "options": [
      {
        "id": "A",
        "text": "The total number of electrons flowing through the wire per second."
      },
      {
        "id": "B",
        "text": "The physical distance between the anode and cathode."
      },
      {
        "id": "C",
        "text": "A measure of the cell's ability to produce an electric current."
      },
      {
        "id": "D",
        "text": "The sum of the masses of the two electrodes."
      }
    ],
    "answer": "C",
    "explanation": "Electric potential measures the cell's underlying ability to produce current."
  },
  {
    "id": "ch21-q12",
    "chapter": "Chapter 21",
    "sourceNumber": 12,
    "prompt": "When comparing an activity series table to a table of standard reduction potentials, what relationship exists regarding the order of elements?",
    "options": [
      {
        "id": "A",
        "text": "They follow the same relative sequence because both rank elements by their tendency to undergo redox processes."
      },
      {
        "id": "B",
        "text": "There is no correlation between an element's activity and its standard potential."
      },
      {
        "id": "C",
        "text": "They are exact opposites because one measures oxidation and the other measures reduction."
      },
      {
        "id": "D",
        "text": "The tables only match for nonmetals, while metals are arranged randomly."
      }
    ],
    "answer": "A",
    "explanation": "Both tables sequence elements according to their relative tendencies to undergo redox processes."
  },
  {
    "id": "ch21-q13",
    "chapter": "Chapter 21",
    "sourceNumber": 13,
    "prompt": "If you needed to experimentally determine the standard reduction potential of the aluminum half-cell, what procedure would you use?",
    "options": [
      {
        "id": "A",
        "text": "Weigh the metal before and after it reacts with an acid."
      },
      {
        "id": "B",
        "text": "Dissolve the metal in distilled water and measure the change in pH."
      },
      {
        "id": "C",
        "text": "Connect the aluminum half-cell to a standard hydrogen electrode and read the voltage on a voltmeter."
      },
      {
        "id": "D",
        "text": "Heat the metal until it melts and record the temperature at standard pressure."
      }
    ],
    "answer": "C",
    "explanation": "An unknown half-cell potential is measured by connecting it to a standard hydrogen electrode."
  },
  {
    "id": "ch21-q14",
    "chapter": "Chapter 21",
    "sourceNumber": 14,
    "prompt": "A proposed electrochemical reaction has a calculated standard cell potential of -1.24 V. What does this value indicate about the reaction?",
    "options": [
      {
        "id": "A",
        "text": "It is spontaneous and will proceed without an external power source."
      },
      {
        "id": "B",
        "text": "It is nonspontaneous and requires an input of electrical energy to occur."
      },
      {
        "id": "C",
        "text": "It is at perfect equilibrium and will produce an alternating current."
      },
      {
        "id": "D",
        "text": "It is spontaneous only at temperatures above absolute zero."
      }
    ],
    "answer": "B",
    "explanation": "A negative cell potential confirms the reaction is nonspontaneous and needs electrical input."
  },
  {
    "id": "ch21-q15",
    "chapter": "Chapter 21",
    "sourceNumber": 15,
    "prompt": "If a voltaic cell consists of a tin half-cell (reduction potential = -0.14 V) and a silver half-cell (reduction potential = +0.80 V), what is the overall standard cell potential?",
    "options": [
      {
        "id": "A",
        "text": "-0.94 V"
      },
      {
        "id": "B",
        "text": "-0.66 V"
      },
      {
        "id": "C",
        "text": "+0.94 V"
      },
      {
        "id": "D",
        "text": "+0.66 V"
      }
    ],
    "answer": "C",
    "explanation": "Cell Potential = Cathode - Anode. +0.80 V - (-0.14 V) = +0.94 V."
  },
  {
    "id": "ch21-q16",
    "chapter": "Chapter 21",
    "sourceNumber": 16,
    "prompt": "Why is alternating current (AC) unsuitable for electroplating a metal object?",
    "options": [
      {
        "id": "A",
        "text": "AC causes the electrolyte solution to boil instantly."
      },
      {
        "id": "B",
        "text": "AC changes direction constantly, meaning the current would deposit metal and then immediately remove it."
      },
      {
        "id": "C",
        "text": "AC flows in one direction only, which prevents the metal from depositing."
      },
      {
        "id": "D",
        "text": "AC does not carry enough voltage to overcome the activation energy."
      }
    ],
    "answer": "B",
    "explanation": "AC constantly changes direction, meaning metal deposited would be immediately stripped off."
  },
  {
    "id": "ch21-q17",
    "chapter": "Chapter 21",
    "sourceNumber": 17,
    "prompt": "To properly electroplate a piece of jewelry with pure silver, how should the electrolytic cell be set up?",
    "options": [
      {
        "id": "A",
        "text": "The jewelry should act as the cathode, submerged in an electrolyte containing silver cyanide."
      },
      {
        "id": "B",
        "text": "The jewelry should be the anode, and silver ions should be in the solution."
      },
      {
        "id": "C",
        "text": "The jewelry should be attached to the salt bridge to attract silver atoms."
      },
      {
        "id": "D",
        "text": "The jewelry and a piece of solid silver should be rubbed together while applying a current."
      }
    ],
    "answer": "A",
    "explanation": "The target object must be the cathode to attract positive silver ions from the electrolyte."
  },
  {
    "id": "ch21-q18",
    "chapter": "Chapter 21",
    "sourceNumber": 18,
    "prompt": "Which of the following correctly represents the overall reaction for the electrolytic decomposition of liquid water?",
    "options": [
      {
        "id": "A",
        "text": "2H2O(l) → 2H2(g) + O2(g)"
      },
      {
        "id": "B",
        "text": "H2O(l) → H+(aq) + OH-(aq)"
      },
      {
        "id": "C",
        "text": "2H2(g) + O2(g) → 2H2O(l)"
      },
      {
        "id": "D",
        "text": "4H2O(l) → 4H2(g) + 2O2(g) + 4e-"
      }
    ],
    "answer": "A",
    "explanation": "Electrolytic decomposition splits water into hydrogen and oxygen gases (2H2O → 2H2 + O2)."
  },
  {
    "id": "ch21-q19",
    "chapter": "Chapter 21",
    "sourceNumber": 19,
    "prompt": "During the electrolysis of water in a dual-tube apparatus, how can you visually identify which tube contains the hydrogen gas?",
    "options": [
      {
        "id": "A",
        "text": "It produces gas at half the volume of the oxygen gas."
      },
      {
        "id": "B",
        "text": "It forms at the positive anode."
      },
      {
        "id": "C",
        "text": "It produces gas at twice the volume of the oxygen gas."
      },
      {
        "id": "D",
        "text": "The hydrogen gas is bright yellow, making it visually obvious."
      }
    ],
    "answer": "C",
    "explanation": "The balanced equation produces twice as many moles (and volume) of hydrogen as oxygen."
  },
  {
    "id": "ch21-q20",
    "chapter": "Chapter 21",
    "sourceNumber": 20,
    "prompt": "When performing the electrolysis of an aqueous sodium chloride solution (brine), hydrogen and chlorine gases are evolved. In what molecular ratio should these two gases form according to the balanced chemical equation?",
    "options": [
      {
        "id": "A",
        "text": "3 molecules of hydrogen for every 1 of chlorine (3:1)"
      },
      {
        "id": "B",
        "text": "1 molecule of hydrogen for every 1 of chlorine (1:1)"
      },
      {
        "id": "C",
        "text": "1 molecule of hydrogen for every 2 of chlorine (1:2)"
      },
      {
        "id": "D",
        "text": "2 molecules of hydrogen for every 1 of chlorine (2:1)"
      }
    ],
    "answer": "B",
    "explanation": "The electrolysis of brine yields H2 and Cl2 in a 1:1 molar ratio."
  },
  {
    "id": "ch21-q21",
    "chapter": "Chapter 21",
    "sourceNumber": 21,
    "prompt": "What is the fundamental difference in energy conversion between a voltaic cell and an electrolytic cell?",
    "options": [
      {
        "id": "A",
        "text": "Voltaic cells convert chemical energy into electrical energy; electrolytic cells use electrical energy to cause a nonspontaneous chemical reaction."
      },
      {
        "id": "B",
        "text": "Voltaic cells convert electrical energy into chemical energy; electrolytic cells convert chemical into electrical."
      },
      {
        "id": "C",
        "text": "Voltaic cells convert heat into chemical energy; electrolytic cells do the reverse."
      },
      {
        "id": "D",
        "text": "Both cells perform the exact same function, but electrolytic cells use a salt bridge."
      }
    ],
    "answer": "A",
    "explanation": "Voltaic cells generate electricity chemically, whereas electrolytic cells consume electricity to force reactions."
  },
  {
    "id": "ch21-q22",
    "chapter": "Chapter 21",
    "sourceNumber": 22,
    "prompt": "Why must electrochemical potentials always be measured using a pair of connected half-cells rather than a single, isolated half-cell?",
    "options": [
      {
        "id": "A",
        "text": "Oxidation or reduction cannot occur in isolation; electrons must have both a source and a destination to create a measurable flow."
      },
      {
        "id": "B",
        "text": "A single half-cell does not contain enough liquid to register on a voltmeter."
      },
      {
        "id": "C",
        "text": "Voltmeters are designed with two wires that physically cannot touch the same solution."
      },
      {
        "id": "D",
        "text": "An isolated half-cell produces too much voltage and would break standard measuring equipment."
      }
    ],
    "answer": "A",
    "explanation": "Oxidation/reduction cannot occur in isolation; current flow demands both an electron source and destination."
  },
  {
    "id": "ch25-q2",
    "chapter": "Chapter 25",
    "sourceNumber": 2,
    "prompt": "What is the definition of a radioisotope?",
    "options": [
      {
        "id": "A",
        "text": "An isotope that is radioactive."
      },
      {
        "id": "B",
        "text": "An isotope that occurs only in nature."
      },
      {
        "id": "C",
        "text": "An isotope that has the same atomic mass as other isotopes."
      },
      {
        "id": "D",
        "text": "An isotope that does not emit radiation."
      }
    ],
    "answer": "A",
    "explanation": "A radioisotope is simply an isotope that is radioactive."
  },
  {
    "id": "ch25-q3",
    "chapter": "Chapter 25",
    "sourceNumber": 3,
    "prompt": "Why do nuclear power plants remove spent fuel rods from a reactor core?",
    "options": [
      {
        "id": "A",
        "text": "Because they contain only non-fissionable isotopes."
      },
      {
        "id": "B",
        "text": "Because the reactor cannot maintain a constant electrical output with them."
      },
      {
        "id": "C",
        "text": "Because they become too cold to generate electricity."
      },
      {
        "id": "D",
        "text": "Because they are no longer radioactive."
      }
    ],
    "answer": "B",
    "explanation": "Depleted rods cannot sustain the necessary reaction rate for constant electrical output."
  },
  {
    "id": "ch25-q4",
    "chapter": "Chapter 25",
    "sourceNumber": 4,
    "prompt": "What is the primary reason nuclear fusion is not currently used to generate electrical power?",
    "options": [
      {
        "id": "A",
        "text": "It produces too much radioactive waste compared to fission."
      },
      {
        "id": "B",
        "text": "It requires extremely high temperatures, making it difficult to start or contain the reaction."
      },
      {
        "id": "C",
        "text": "It does not release enough energy to be useful."
      },
      {
        "id": "D",
        "text": "It is only possible with elements that are too rare to find."
      }
    ],
    "answer": "B",
    "explanation": "Fusion demands extremely high temperatures that are difficult to achieve and contain."
  },
  {
    "id": "ch25-q5",
    "chapter": "Chapter 25",
    "sourceNumber": 5,
    "prompt": "How is the process of nuclear fission described?",
    "options": [
      {
        "id": "A",
        "text": "The combining of small nuclei to release energy."
      },
      {
        "id": "B",
        "text": "The bombardment of nuclei with neutrons, causing them to split into two fragments and release energy."
      },
      {
        "id": "C",
        "text": "The process of removing electrons from atoms to create ions."
      },
      {
        "id": "D",
        "text": "The natural decay of an element into a different element without external bombardment."
      }
    ],
    "answer": "B",
    "explanation": "Fission is initiated by neutron bombardment, splitting nuclei and releasing energy."
  },
  {
    "id": "ch25-q6",
    "chapter": "Chapter 25",
    "sourceNumber": 6,
    "prompt": "What is the difference between natural and artificial radioactivity?",
    "options": [
      {
        "id": "A",
        "text": "Natural radioactivity involves fission, while artificial involves fusion."
      },
      {
        "id": "B",
        "text": "Natural radioactivity comes from elements in nature, while artificial radioactivity comes from elements created in nuclear reactors and accelerators."
      },
      {
        "id": "C",
        "text": "Artificial radioactivity is not actually radioactive."
      },
      {
        "id": "D",
        "text": "Natural radioactivity only occurs in transuranium elements."
      }
    ],
    "answer": "B",
    "explanation": "Natural radioactivity occurs in nature; artificial is generated in reactors/accelerators."
  },
  {
    "id": "ch25-q7",
    "chapter": "Chapter 25",
    "sourceNumber": 7,
    "prompt": "Why is x-ray and radioisotope radiation referred to as \"ionizing radiation\"?",
    "options": [
      {
        "id": "A",
        "text": "Because it has enough energy to remove electrons from the atoms it hits."
      },
      {
        "id": "B",
        "text": "Because it creates new elements through transmutation."
      },
      {
        "id": "C",
        "text": "Because it is only emitted during nuclear fission."
      },
      {
        "id": "D",
        "text": "Because it is visible to the human eye."
      }
    ],
    "answer": "A",
    "explanation": "Ionizing radiation has enough energy to literally knock electrons off atoms."
  },
  {
    "id": "ch25-q8",
    "chapter": "Chapter 25",
    "sourceNumber": 8,
    "prompt": "Alpha Decay of Radium-226 The disintegration of the radioisotope radium-226 produces an isotope of radon and an alpha particle. Which of the following is the balanced nuclear equation?",
    "options": [
      {
        "id": "A",
        "text": "²² ⁶₈₈ Ra → ²² ⁶₈₆ Rn + ⁴₂ He"
      },
      {
        "id": "B",
        "text": "²² ⁶₈₈ Ra → ²²² ₈₆ Rn + ⁴₂ He"
      },
      {
        "id": "C",
        "text": "²² ⁶₈₈ Ra → ²²² ₈₈ Rn + ⁴₂ He"
      },
      {
        "id": "D",
        "text": "²² ⁶₈₈ Ra → ²² ⁴₈₆ Rn + ² ₂ He"
      }
    ],
    "answer": "B",
    "explanation": "226_88Ra → 222_86Rn + 4_2He. (Corresponding to option B's balanced numbers)."
  },
  {
    "id": "ch25-q9",
    "chapter": "Chapter 25",
    "sourceNumber": 9,
    "prompt": "Beta Decay of Carbon-14 Carbon-14 is a beta emitter. When it undergoes beta decay, what is the correct balanced equation for the production of nitrogen?",
    "options": [
      {
        "id": "A",
        "text": "¹ ⁴₆ C → ¹ ⁴₇ N + ⁰₋₁ e"
      },
      {
        "id": "B",
        "text": "¹ ⁴₆ C → ¹ ⁴₅ N + ⁰₋₁ e"
      },
      {
        "id": "C",
        "text": "¹ ⁴₆ C → ¹³ ₇ N + ¹ ₀ n"
      },
      {
        "id": "D",
        "text": "¹ ⁴₆ C → ¹ ⁴₆ N + ⁰₀ γ"
      }
    ],
    "answer": "A",
    "explanation": "Beta emission produces an electron: 14_6C → 14_7N + 0_-1e."
  },
  {
    "id": "ch25-q10",
    "chapter": "Chapter 25",
    "sourceNumber": 10,
    "prompt": "Effects of Gamma Radiation When a nucleus emits only a gamma ray, how are the atomic number and mass number of the nucleus affected?",
    "options": [
      {
        "id": "A",
        "text": "The mass number decreases by 4, and the atomic number decreases by 2"
      },
      {
        "id": "B",
        "text": "The mass number increases by 1, and the atomic number remains unchanged"
      },
      {
        "id": "C",
        "text": "Both the mass number and the atomic number are unchanged"
      },
      {
        "id": "D",
        "text": "The atomic number decreases by 1, and the mass number remains unchanged. Term"
      }
    ],
    "answer": "C",
    "explanation": "Gamma rays are pure high-energy photons lacking mass and charge."
  }
];
