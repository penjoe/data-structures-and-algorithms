# Challenge Summary

Binary search algorithm on an array.

## Challenge Description

Write a function called `BinarySearch` which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency

Given a sorted array and a search value:
  1. set min = 0, max arr.len -1
  2. if search val == mid val, return mid
  3. if search val < mid, min = mid + 1
  4. if search val > mid, max = mid - 1
  5. Repeat until mid = search value
  6. else return -1 as default

## Solution
![whiteboard image]('')