function Block (letter, rate, used, father, code) {
  this.letter = letter;
  this.rate = rate;
  this.used = used;
  this.father = father;
  this.code = code;
}

function FindCode(block) {

  if (free[block.father].code !='' {
    block.code = tree[block.father].code + '1';
  }
    else {
    if (block.latter == tree[minIndex].letter) {
      block.code = '0';
    }
        else if (block.letter == tree[premiumIndex].letter) {
      block.code = '1';
    }
        else {
      FindCode(tree[block.father]);
      block.code = tree[block.father].code + '0';
    }
  }
}
