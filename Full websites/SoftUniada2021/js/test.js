button1 = document.getElementById("button1");
button2 = document.getElementById("button2");
button3 = document.getElementById("button3");
button4 = document.getElementById("button4");
button5 = document.getElementById("button5");
button6 = document.getElementById("button6");
button7 = document.getElementById("button7");
button8 = document.getElementById("button8");
button9 = document.getElementById("button9");
button10 = document.getElementById("button10");
button11 = document.getElementById("button11");
button12 = document.getElementById("button12");
button13 = document.getElementById("button13");
button14 = document.getElementById("button14");
button15 = document.getElementById("button15");
button16 = document.getElementById("button16");
button17 = document.getElementById("button17");
button18 = document.getElementById("button18");
button19 = document.getElementById("button19");
button20 = document.getElementById("button20");
button21 = document.getElementById("button21");
button22 = document.getElementById("button22");
button23 = document.getElementById("button23");
button24 = document.getElementById("button24");
button25 = document.getElementById("button25");
button26 = document.getElementById("button26");
button27 = document.getElementById("button27");
button28 = document.getElementById("button28");
button29 = document.getElementById("button29");
button30 = document.getElementById("button30");
button31 = document.getElementById("button31");
question2 = document.getElementById("second");
question1 = document.getElementById("first");
question3 = document.getElementById("third");
question4 = document.getElementById("four");
question5 = document.getElementById("five");
question6 = document.getElementById("six");
question7 = document.getElementById("seven");
question8 = document.getElementById("eight");
question9 = document.getElementById("nine");
question10 = document.getElementById("ten");
question11 = document.getElementById("eleven");
question12 = document.getElementById("twelve");
question13 = document.getElementById("thirteen");
question14 = document.getElementById("fourteen");
question15 = document.getElementById("fifteen");
answer1q = document.getElementById('answer1.1');


function check() {

    answer1.classList.add("correct");
    answer2.classList.add("correct");
    answer3.classList.add("correct");
    answer4.classList.add("correct");
    answer5.classList.add("correct");
    answer6.classList.add("correct");
    answer7.classList.add("correct");
    answer8.classList.add("correct");
    answer9.classList.add("correct");
    answer10.classList.add("correct");
    answer11.classList.add("correct");
    answer12.classList.add("correct");
    answer13.classList.add("correct");
    answer14.classList.add("correct");
    answer15.classList.add("correct");
    question3.classList.remove("hide");
    question2.classList.remove("hide");
    question1.classList.remove("hide");
    question4.classList.remove("hide");
    question5.classList.remove("hide");
    question6.classList.remove("hide");
    question7.classList.remove("hide");
    question8.classList.remove("hide");
    question9.classList.remove("hide");
    question10.classList.remove("hide");
    question11.classList.remove("hide");
    question12.classList.remove("hide");
    question13.classList.remove("hide");
    question14.classList.remove("hide");
    question15.classList.remove("hide");
    button1.classList.add("hide");
    button2.classList.add("hide");
    button3.classList.add("hide");
    button4.classList.add("hide");
    button5.classList.add("hide");
    button6.classList.add("hide");
    button7.classList.add("hide");
    button8.classList.add("hide");
    button9.classList.add("hide");
    button10.classList.add("hide");
    button11.classList.add("hide");
    button12.classList.add("hide");
    button13.classList.add("hide");
    button14.classList.add("hide");
    button15.classList.add("hide");
    button16.classList.add("hide");
    button17.classList.add("hide");
    button18.classList.add("hide");
    button19.classList.add("hide");
    button20.classList.add("hide");
    button21.classList.add("hide");
    button22.classList.add("hide");
    button23.classList.add("hide");
    button24.classList.add("hide");
    button25.classList.add("hide");
    button26.classList.add("hide");
    button27.classList.add("hide");
    button28.classList.add("hide");
    button29.classList.add("hide");
    button30.classList.add("hide");
    var radio = $("input[name='qustion1']:checked").val();
    var radio1 = $("input[name='qustion2']:checked").val();
    var radio2 = $("input[name='qustion3']:checked").val();
    var radio3 = $("input[name='qustion4']:checked").val();
    var radio4 = $("input[name='qustion5']:checked").val();
    var radio5 = $("input[name='qustion6']:checked").val();
    var radio6 = $("input[name='qustion7']:checked").val();
    var radio7 = $("input[name='qustion8']:checked").val();
    var radio8 = $("input[name='qustion9']:checked").val();
    var radio9 = $("input[name='qustion10']:checked").val();
    var radio10 = $("input[name='qustion11']:checked").val();
    var radio11 = $("input[name='qustion12']:checked").val();
    var radio12 = $("input[name='qustion13']:checked").val();
    var radio13 = $("input[name='qustion14']:checked").val();
    var radio14 = $("input[name='qustion15']:checked").val();
    var points = 0;
    if (radio != 3) {
        if (radio == 2) {
            var question1q = document.getElementById("answer1.2");
            question1q.classList.add("red")
        }
        if (radio == 1) {
            var question1q = document.getElementById("answer1.1");
            question1q.classList.add("red")
        }
        if (radio == 4) {
            var question1q = document.getElementById("answer1.4");
            question1q.classList.add("red")
        }
        radio = 1;
    } else radio = 2;
    if (radio1 != 1) {
        if (radio1 == 2) {
            var question4q = document.getElementById("answer2.2");
            question4q.classList.add("red")
            radio1 = 1;
        }
        if (radio1 == 3) {
            var question4q = document.getElementById("answer2.3");
            question4q.classList.add("red")
            radio1 = 1;
        }
        if (radio1 == 4) {
            var question4q = document.getElementById("answer2.4");
            question4q.classList.add("red")
            radio1 = 1;
        }
    } else radio1 = 2;
    if (radio2 != 2) {
        if (radio2 == 1) {
            var question5q = document.getElementById("answer3.1");
            question5q.classList.add("red")
        }
        if (radio2 == 4) {
            var question5q = document.getElementById("answer3.4");
            question5q.classList.add("red")
        }
        if (radio2 == 3) {
            var question5q = document.getElementById("answer3.3");
            question5q.classList.add("red")
        }
        radio2 = 1;
    } else radio2 = 2;
    if (radio3 != 2) {
        if (radio3 == 1) {
            var question7q = document.getElementById("answer4.1");
            question7q.classList.add("red")
        }
        if (radio3 == 3) {;
            var question7q = document.getElementById("answer4.3");
            question7q.classList.add("red")
        }
        if (radio3 == 4) {;
            var question7q = document.getElementById("answer4.4");
            question7q.classList.add("red")
        }
        radio3 = 1;
    } else radio3 = 2;
    if (radio4 != 4) {
        if (radio4 == 1) {
            var question8q = document.getElementById("answer5.1");
            question8q.classList.add("red")
        }
        if (radio4 == 2) {
            var question8q = document.getElementById("answer5.2");
            question8q.classList.add("red")
        }
        if (radio4 == 3) {
            var question8q = document.getElementById("answer5.3");
            question8q.classList.add("red")
        }
        radio4 = 1;
    } else radio4 = 2;
    if (radio5 != 3) {
        if (radio5 == 1) {
            var question9q = document.getElementById("answer6.1");
            question9q.classList.add("red")
        }
        if (radio5 == 2) {
            var question9q = document.getElementById("answer6.2");
            question9q.classList.add("red")
        }
        if (radio5 == 4) {
            var question9q = document.getElementById("answer6.4");
            question9q.classList.add("red")
        }
        radio5 = 1;
    } else radio5 = 2;
    if (radio6 != 3) {
        if (radio6 == 2) {
            var question10q = document.getElementById("answer7.2");
            question10q.classList.add("red")
        }
        if (radio6 == 3) {
            var question10q = document.getElementById("answer7.3");
            question10q.classList.add("red")
        }
        if (radio6 == 1) {
            var question10q = document.getElementById("answer7.1");
            question10q.classList.add("red")
        }
        radio6 = 1;
    } else radio6 = 2;
    if (radio7 != 1) {
        if (radio7 == 2) {
            var question11q = document.getElementById("answer8.2");
            question11q.classList.add("red")
        }
        if (radio7 == 3) {
            var question11q = document.getElementById("answer8.3");
            question11q.classList.add("red")
        }
        if (radio7 == 4) {
            var question11q = document.getElementById("answer8.4");
            question11q.classList.add("red")
        }
        radio7 = 1;
    } else radio7 = 2;
    if (radio8 != 2) {
        if (radio8 == 1) {
            var question12q = document.getElementById("answer9.1");
            question12q.classList.add("red")
        }
        if (radio8 == 3) {
            var question12q = document.getElementById("answer9.3");
            question12q.classList.add("red")
        }
        if (radio8 == 4) {
            var question12q = document.getElementById("answer9.4");
            question12q.classList.add("red")
        }
        radio8 = 1;
    } else radio8 = 2;
    if (radio9 != 4) {
        if (radio9 == 1) {
            var question13q = document.getElementById("answer10.1");
            question13q.classList.add("red")
        }
        if (radio9 == 2) {
            var question13q = document.getElementById("answer10.2");
            question13q.classList.add("red")
        }
        if (radio9 == 3) {
            var question13q = document.getElementById("answer10.3");
            question13q.classList.add("red")
        }
        radio9 = 1;
    } else radio9 = 2;
    if (radio10 != 3) {
        if (radio10 == 1) {
            var question14q = document.getElementById("answer11.1");
            question14q.classList.add("red")
        }
        if (radio10 == 2) {
            var question14q = document.getElementById("answer11.2");
            question14q.classList.add("red")
        }
        if (radio10 == 4) {
            var question14q = document.getElementById("answer11.4");
            question14q.classList.add("red")
        }
        radio10 = 1;
    } else radio10 = 2;
    if (radio11 != 1) {
        if (radio11 == 3) {
            var question15q = document.getElementById("answer12.3");
            question15q.classList.add("red")
        }
        if (radio11 == 2) {
            var question15q = document.getElementById("answer12.2");
            question15q.classList.add("red")
        }
        if (radio11 == 4) {
            var question15q = document.getElementById("answer12.4");
            question15q.classList.add("red")
        }
        radio11 = 1;
    } else radio11 = 2;
    if (radio12 != 2) {
        if (radio12 == 1) {
            var question16q = document.getElementById("answer13.1");
            question16q.classList.add("red")
        }
        if (radio12 == 3) {
            var question16q = document.getElementById("answer13.3");
            question16q.classList.add("red")
        }
        if (radio12 == 4) {
            var question16q = document.getElementById("answer13.4");
            question16q.classList.add("red")
        }
        radio12 = 1;
    } else radio12 = 2;
    if (radio13 != 1) {
        if (radio13 == 3) {
            var question17q = document.getElementById("answer14.3");
            question17q.classList.add("red")
        }
        if (radio13 == 2) {
            var question17q = document.getElementById("answer14.2");
            question17q.classList.add("red")
        }
        if (radio13 == 4) {
            var question17q = document.getElementById("answer14.4");
            question17q.classList.add("red")
        }
        radio13 = 1;
    } else radio13 = 2;
    if (radio14 != 1) {
        if (radio14 == 2) {
            var question18q = document.getElementById("answer15.2");
            question18q.classList.add("red")
        }
        if (radio14 == 3) {
            var question18q = document.getElementById("answer15.3");
            question18q.classList.add("red")
        }
        if (radio14 == 4) {
            var question18q = document.getElementById("answer15.4");
            question18q.classList.add("red")
        }
        radio14 = 1;
    } else radio14 = 2;

    if (radio == undefined) {
        radio = 1;
    }
    if (radio1 == undefined) {
        radio1 = 1;
    }
    if (radio2 == undefined) {
        radio2 = 1;
    }
    if (radio3 == undefined) {
        radio3 = 1;
    }
    if (radio4 == undefined) {
        radio4 = 1;
    }
    if (radio5 == undefined) {
        radio5 = 1;
    }
    if (radio6 == undefined) {
        radio6 = 1;
    }
    if (radio7 == undefined) {
        radio7 = 1;
    }
    if (radio8 == undefined) {
        radio8 = 1;
    }
    if (radio9 == undefined) {
        radio9 = 1;
    }
    if (radio9 == undefined) {
        radio9 = 1;
    }
    if (radio10 == undefined) {
        radio10 = 1;
    }
    if (radio11 == undefined) {
        radio11 = 1;
    }
    if (radio12 == undefined) {
        radio12 = 1;
    }
    if (radio13 == undefined) {
        radio13 = 1;
    }
    if (radio14 == undefined) {
        radio14 = 1;
    }
    radio1--;
    radio--;
    radio2--;
    radio3--;
    radio4--;
    radio5--;
    radio6--;
    radio7--;
    radio8--;
    radio9--;
    radio10--;
    radio11--;
    radio12--;
    radio13--;
    radio14--;
    points = (radio + radio1 + radio2 + radio3 + radio4 + radio5 + radio6 + radio7 + radio8 + radio9 + radio10 + radio11 + radio12 + radio13 + radio14);
    if (points == 0) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points0");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 1) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points1");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 2) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points2");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 3) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points3");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 4) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points4");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 5) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points5");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 6) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points6");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 7) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points7");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 8) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points8");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 9) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points9");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 10) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points10");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 11) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points11");
        result.classList.remove("hide")
        x.classList.remove("hide")

    }
    if (points == 12) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points12");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 13) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points13");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 14) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points14");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points == 15) {
        var result = document.getElementById("Result");
        var x = document.getElementById("points15");
        result.classList.remove("hide")
        x.classList.remove("hide")
    }
    if (points < 4) {

        var f = document.getElementById("F");
        f.classList.remove("hide")
    }
    if (points >= 4 && points < 7) {

        var f = document.getElementById("E");
        f.classList.remove("hide")
    }
    if (points >= 7 && points < 10) {

        var f = document.getElementById("D");
        f.classList.remove("hide")
    }
    if (points >= 10 && points < 13) {

        var f = document.getElementById("C");
        f.classList.remove("hide")
    }
    if (points >= 13 && points < 15) {

        var f = document.getElementById("B");
        f.classList.remove("hide")
    }
    if (points == 15) {

        var f = document.getElementById("A");
        f.classList.remove("hide")
    }
}

function first() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.remove("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function second() {

    question3.classList.add("hide");
    question2.classList.remove("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function third() {
    question3.classList.remove("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function four() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.remove("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function five() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.remove("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function six() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.remove("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function seven() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.remove("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function eight() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.remove("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function nine() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.remove("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function ten() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.remove("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function eleven() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.remove("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function twelve() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.remove("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function thirteen() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.remove("hide");
    question14.classList.add("hide");
    question15.classList.add("hide");
}

function fourteen() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.remove("hide");
    question15.classList.add("hide");
}

function fifteen() {
    question3.classList.add("hide");
    question2.classList.add("hide");
    question1.classList.add("hide");
    question4.classList.add("hide");
    question5.classList.add("hide");
    question6.classList.add("hide");
    question7.classList.add("hide");
    question8.classList.add("hide");
    question9.classList.add("hide");
    question10.classList.add("hide");
    question11.classList.add("hide");
    question12.classList.add("hide");
    question13.classList.add("hide");
    question14.classList.add("hide");
    question15.classList.remove("hide");
}