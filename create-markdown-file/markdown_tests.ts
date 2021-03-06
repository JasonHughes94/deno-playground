import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { Markdown, ListTypes } from './mod.ts';

Deno.test('Generates a string with markdown header', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.header('Test Header', 1);

  //Assert
  assertEquals('# Test Header\n', markdown.content);
});

Deno.test('Throws an error if a value greater than 6 is supplied', () => {
  //Arrange
  let markdown = new Markdown();

  //Assert
  assertThrows(() => markdown.header('Test Header', 7));
});

Deno.test('Generates an unordered list', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.list(['Item 1', 'Item 2']);

  //Assert
  assertEquals('- Item 1\n- Item 2\n', markdown.content);
});

Deno.test('Generates an unordered list using the + character', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.list(['Item 1', 'Item 2'], ListTypes.UnOrdered, '+');

  //Assert
  assertEquals('+ Item 1\n+ Item 2\n', markdown.content);
});

Deno.test('Generates an unordered list using the * character', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.list(['Item 1', 'Item 2'], ListTypes.UnOrdered, '*');

  //Assert
  assertEquals('* Item 1\n* Item 2\n', markdown.content);
});

Deno.test('Throws an error when an invalid character  is supplied', () => {
  //Arrange
  let markdown = new Markdown();

  //Assert
  assertThrows(() => markdown.list(['Item 1', 'Item 2'], ListTypes.UnOrdered, '('));
});

Deno.test('Generates an ordered list', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown.list(['Item 1', 'Item 2'], ListTypes.Ordered);

  //Assert
  assertEquals('1. Item 1\n2. Item 2\n', markdown.content);
});

Deno.test('Test chaining', () => {
  //Arrange
  let markdown = new Markdown();

  //Act
  markdown
    .header('Header', 1)
    .list(['Item 1', 'Item 2'], ListTypes.Ordered);

  //Assert
  assertEquals('# Header\n1. Item 1\n2. Item 2\n', markdown.content);
});