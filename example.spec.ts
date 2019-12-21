// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

it('adds 1 + 2 to equal 3 in TScript', () => {
    const sum = (a, b) => a + b;
    expect(sum(1, 2)).toBe(3);
});

it('adds 1 + 2 to equal 3 in JavaScript', () => {
    const sum = (a, b) => a + b;
    expect(sum(1, 2)).toBe(3);
});