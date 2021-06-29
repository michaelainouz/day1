const data = [
    { name: "kingGeorgeVI", parent: ["QueenElizabethII", "PrincessMargaret"] },
    { name: "QueenElizabeth", parent: ["QueenElizabethII", "PrincessMargaret"] },
    { name: "PrincePhilip", parent: ["Charles", "Anne", "PrinceAndrew", "PrinceEdward"] },
    { name: "QueenElizabethII", parent: ["Charles", "Anne", "PrinceAndrew", "PrinceEdward"] },
    { name: "PrincessMargaret", parent: ["null"] },
    { name: "Camila", parent: ["null"] },
    { name: "Charles", parent: ["PrinceWilliam", "PrinceHarry"] },
    { name: "Diana", parent: ["PrinceWilliam", "PrinceHarry"] },
    { name: "Anne", parent: ["null"] },
    { name: "PrinceAndrew", parent: ["null"] },
    { name: "PrinceEdward", parent: ["null"] },
    { name: "Catherine", parent: ["PrinceGorge", "PrincessCharlotte", "PrinceLouis"] },
    { name: "PrinceWilliam", parent: ["PrinceGorge", "PrincessCharlotte", "PrinceLouis"] },
    { name: "PrinceHarry", parent: ["ArchieHarrison"] },
    { name: "Meghan", parent: ["ArchieHarrison"] },
    { name: "PrinceGorge", parent: ["null"] },
    { name: "PrincessCharlotte", parent: ["null"] },
    { name: "PrinceLouis", parent: ["null"] },
    { name: "ArchieHarrison", parent: ["null"] },
];

function childOf() {
    return "the parent of " + this.parent.map(parents => parent.name).join(' & ')
};
