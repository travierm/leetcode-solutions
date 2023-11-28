// https://leetcode.com/problems/search-insert-position/description/
import { expect, test } from "bun:test";

// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not,
// return the index where it would be if it were inserted in order.

function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
}

test("target is at index", () => {
  const nums = [1, 3, 5, 6];
  const target = 5;

  expect(searchInsert(nums, target)).toBe(2);
});

test("target not in nums", () => {
  const nums = [1, 3, 5, 6];
  const target = 2;

  expect(searchInsert(nums, target)).toBe(1);
});
