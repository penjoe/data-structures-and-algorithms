# Challenge Summary
Implementing a quick sort algorithm.

## Challenge Description
For this challenge, I made a basic implementation of a quick sort algorithm that will take in an unsorted array of numbers, sort them and return the sorted array. 

## Approach & Efficiency
Quick sort is a divide and conquer approach to sorting. The `quickSort` function uses recursion and two helper functions. The main function, `quickSort`, first uses a `partition` function that will divide the array into less than and greater than halves based on a `pivot`, which is typically the last index in the array. After `quickSort` runs `partition`, a `swap` function is called to swap the pivot to the middle of the partition, essentially placing the pivot between the less than and greater than halves. After this, `quickSort` recursively calls itself for each partitioned half of the array. 

Big O: 
  - Time: Time complexity for this quick sort approach is a worst case of 0(n<sup>2</sup>) since it will ultimately loop over the array to find the pivot and do so again on each partition of the array. And since recursion is used, there's lots of looping going on.
  - Space: Space complexity for quick sort is just going to be an 0(1) since no new arrays or data structures are created for this. The array that us taken in is modified in place.

## Solution
See a detailed walkthrough of this algorithm [HERE](BLOG.md)!