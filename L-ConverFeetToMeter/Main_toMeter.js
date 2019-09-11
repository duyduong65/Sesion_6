

function convertToMet(foot) {
    let met = foot * 0.305;
    document.getElementById('value_1').innerHTML = met;
}

function convertToFoot(met) {
    let foot = met * 3.279;
    document.getElementById('value_2').innerHTML = foot;
}