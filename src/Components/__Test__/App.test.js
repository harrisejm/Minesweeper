import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

const smallNewBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];
const mediumNewBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255];
const largeNewBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575];

const boardWithBombsArray = [0,,,,,,,,8,,,,,,,,16,,,,,,,,24,,,,,,,,,,,,,,,,,,,,,,,,,49,,,,,,,,57,,,60,,,,,,66,,,,,,72,,,,,,,,80];

const vituralSmallBoard =  [ [ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: 'X', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' } ] ];

const bombs = [0,8,16,24,49,57,60,66,72,80];

///Used for testing random();
let bombsMockRandomNumberSmall = [0,7,14,21,45,52,54,59,64,71];
function mockRandomNumberGen(){
  let mockRandomNumber = bombsMockRandomNumberSmall[0];
  bombsMockRandomNumberSmall.shift();
  return mockRandomNumber;
}
/////////

const newBoard = new App;

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



describe("Generates array of numbers for small, medium and large boards using newBoard()",()=> {

  it('Creates small board with newBoard()', ()=> {
    expect(newBoard.newBoard(81)).toEqual(smallNewBoard);
  });
  it('Creates medium board with newBoard()', ()=> {
    expect(newBoard.newBoard(256)).toEqual(mediumNewBoard);
  });
  it("Creates large board with newBoard()", ()=> {
    expect(newBoard.newBoard(576)).toEqual(largeNewBoard)
  });
});


describe("Creates array of bomb positions for small, medium and large boards using with bombs()",()=>{
  it('Creates array of bomb positions for the small board using bombs()',()=>{
    expect(newBoard.bombs(newBoard.newBoard(81),81,mockRandomNumberGen,71)).toEqual(bombs);
  })
});


describe("Creates array of bombs placed in correct location for small, medium and large boards using boardWithBombs()",()=>{

  it("Creates array of bombs for a small board with boardWithBombs()", ()=> {
    expect(newBoard.boardWithBombs(bombs,newBoard.state.small,10)).toEqual(boardWithBombsArray);
  });
});


describe("Creates nested array with objects corresponding to each square, virtual boards with createBoard()",()=>{
  it("Creates small virtual board",()=>{
    expect(newBoard.createBoard(newBoard.boardWithBombs(bombs,newBoard.state.small,10),81)).toEqual(vituralSmallBoard);
  });
});

describe("Checks for bomb locations when a square is clicked.",()=>{
  const blankBoard = [
    [{space:" "},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:" "}]
  ];
  const allBombsBoard = [
    [{space:"X"},{space:"X"},{space:"X"}],
    [{space:"X"},{space:" "},{space:"X"}],
    [{space:"X"},{space:"X"},{space:"X"}]
  ];
  const allBombsBoardWithNumber = [
    [{space:"X"},{space:"X"},{space:"X"}],
    [{space:"X"},{space:8},{space:"X"}],
    [{space:"X"},{space:"X"},{space:"X"}]
  ];
  const topLeftBoard = [
    [{space:"X"},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:" "}]
  ];
  const topBoard = [
    [{space:" "},{space:"X"},{space:" "}],
    [{space:" "},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:" "}]
  ];
  const topRightBoard = [
    [{space:" "},{space:" "},{space:"X"}],
    [{space:" "},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:" "}]
  ];
  const leftBoard = [
    [{space:" "},{space:" "},{space:" "}],
    [{space:"X"},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:" "}]
  ];
  const rightBoard = [
    [{space:" "},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:"X"}],
    [{space:" "},{space:" "},{space:" "}]
  ];
  const leftBottomBoard = [
    [{space:" "},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:" "}],
    [{space:"X"},{space:" "},{space:" "}]
  ];
  const bottomBoard = [
    [{space:" "},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:" "}],
    [{space:" "},{space:"X"},{space:" "}]
  ];
  const rightBottomBoard = [
    [{space:" "},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:" "}],
    [{space:" "},{space:" "},{space:"X"}]
  ];

  const blankTop = newBoard.topRowBombs(blankBoard,1,1);
  const blankMiddle = newBoard.middleRowBombs(blankBoard,1,1);
  const blankBottom = newBoard.bottomRowBombs(blankBoard,1,1);

  const allBombsTop = newBoard.topRowBombs(allBombsBoard,1,1);
  const allBombsMiddle = newBoard.middleRowBombs(allBombsBoard,1,1);
  const allBombsBottom = newBoard.bottomRowBombs(allBombsBoard,1,1);
  //
  const topLeft = newBoard.topRowBombs(topLeftBoard,1,1);
  const top = newBoard.topRowBombs(topBoard,1,1);
  const topRight = newBoard.topRowBombs(topRightBoard,1,1);
  
  const left = newBoard.middleRowBombs(leftBoard,1,1);
  const right = newBoard.middleRowBombs(rightBoard,1,1);

  const leftBottom = newBoard.bottomRowBombs(leftBottomBoard,1,1);
  const bottom = newBoard.bottomRowBombs(bottomBoard,1,1);
  const rightBottom = newBoard.bottomRowBombs(rightBottomBoard,1,1);
  //

  it("Checks the TOP ROW for bombs with topRowBombs(). NO BOMBS, will return 0 if no bombs are found",()=>{
    expect(blankTop).toEqual(0);
  });
  it("Checks the MIDDLE ROW for bombs with topRowBombs(). NO BOMBS, will return 0 if no bombs are found",()=>{
    expect(blankMiddle).toEqual(0);
  });
  it("Checks the BOTTOM ROW for bombs with topRowBombs(). NO BOMBS, will return 0 if no bombs are found",()=>{
    expect(blankBottom).toEqual(0);
  });

  it("Checks the TOP ROW for bombs with topRowBombs(). ALL BOMBS, will return 3 if all bombs are found",()=>{
    expect(allBombsTop).toEqual(3);
  });
  it("Checks the MIDDLE ROW for bombs with topRowBombs(). ALL BOMBS, will return 2 if all bombs are found",()=>{
    expect(allBombsMiddle).toEqual(2);
  });
  it("Checks the BOTTOM ROW for bombs with topRowBombs(). ALL BOMBS, will return 3 if all bombs are found",()=>{
    expect(allBombsBottom).toEqual(3);
  });

///// topRowBombs()
  it("Checks the TOP LEFT square for bomb with topRowBombs(). Returns 1 if bomb is found",()=>{
    expect(topLeft).toEqual(1);
  });

  it("Checks the TOP square for bomb with topRowBombs(). Returns 1 if bomb is found",()=>{
    expect(top).toEqual(1);
  });

  it("Checks the TOP RIGHT square for bomb with topRowBombs(). Returns 1 if bomb is found",()=>{
    expect(topRight).toEqual(1);
  });
////// middleRowBombs()
  it("Checks the LEFT square for bomb with middleRowBombs(). Returns 1 if bomb is found",()=>{
    expect(left).toEqual(1);
  });
  it("Checks the RIGHT square for bomb with middleRowBombs(). Returns 1 if bomb is found",()=>{
    expect(right).toEqual(1);
  });
///// bottomRowBombs()
  it("Checks the LEFT BOTTOM square for bomb with bottomRowBombs(). Returns 1 if bomb is found",()=>{
    expect(leftBottom).toEqual(1);
  });
  it("Checks the BOTTOM square for bomb with bottomRowBombs(). Returns 1 if bomb is found",()=>{
    expect(bottom).toEqual(1);
  });
  it("Checks the RIGHT BOTTOM square for bomb with bottomRowBombs(). Returns 1 if bomb is found",()=>{
    expect(rightBottom).toEqual(1);
  });
 //// bombNumb()
  it("Checks for bombs one space away from click square with bombNumb(). Runs topRowBombs(), middleRowBombs(), bottomRowBombs(). Changes the squares object property 'space' from ' ' to the number of bombs found. NO BOMBS, will return 0 if no bombs are found",()=>{
    expect(newBoard.bombNumb(blankBoard,newBoard.topRowBombs,newBoard.middleRowBombs,newBoard.bottomRowBombs)).toEqual(blankBoard);
  });
  it("Checks for bombs one space away from click square with bombNumb(). Runs topRowBombs(), middleRowBombs(), bottomRowBombs(). Changes the squares object property 'space' from ' ' to the number of bombs found.ALL BOMBS, will return 8 if all spaces are bomb",()=>{
    expect(newBoard.bombNumb(allBombsBoard,newBoard.topRowBombs,newBoard.middleRowBombs,newBoard.bottomRowBombs)).toEqual(allBombsBoardWithNumber);
  });
});
