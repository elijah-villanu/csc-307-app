// module.test.js
import mut from './module.js'; // MUT = Module Under Test

/* sum testing */
test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});


/* div testing */
// Normal division test
test('Testing div -- success', ()=>{
  const expected = 5
  const got = mut.div(60,12)
  expect(got).toBe(expected)
});

//Divide by zero exception test
test('Testing div by zero -- success',()=>{
  const expected = Infinity
  const got = mut.div(12,0)
  expect(got).toBe(expected);
});

// Zero divided by zero test
test('Testing zero div by zero -- success',()=>{
  const expected = NaN
  const got = mut.div(0,0)
  expect(got).toBe(expected)
});


/* Contains Number Testing */
// Normal string with numbers test
test('Testing contains number -- success',() =>{
  const expected = true
  const got = mut.containsNumbers("abcdsffff*);fffff3")
  expect(got).toBe(expected)
});

//Normal string without numbers test
test('Testing contains NO number -- success',() =>{
  const expected = false
  const got = mut.containsNumbers("abcdef/>;;;")
  expect(got).toBe(expected)
});

// Empty string test
test('Testing empty string -- success',() =>{
  const expected = false
  const got = mut.containsNumbers("")
  expect(got).toBe(expected)
});

// Single character test 
test('Testing single character -- success',() =>{
  const expected = true
  const got = mut.containsNumbers("3")
  expect(got).toBe(expected)
});

// Single character without number
test('Testing single character -- success',() =>{
  const expected = false
  const got = mut.containsNumbers("-")
  expect(got).toBe(expected)
});

// String with spaces test
test('Testing string with spaces -- success',() =>{
  const expected = true
  const got = mut.containsNumbers("mytgf--= dg    9685")
  expect(got).toBe(expected)
});
