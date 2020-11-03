# Challenge Summary
<!-- Short summary or background information -->
Implementation of an Insertion Sort algorithm.

## Challenge Description
<!-- Description of the challenge -->
In this challenge, the goal was to write a function called insertionSort that takes in as an argument an unsorted array of numbers and returns the same array sorted. This implementation will only work with numbers. Negative numbers are acceptable.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The basics of the insertion sort algorithm is that it takes in an array and loops over that array twice. The first array is a for loop operating on the variable [i], and at each index of the array, we check [i] with a while loop that operates on the vaiable [j]. For the while loop, we set the breaking condition to be while [j] is greater than 0 and also while [j] is less than a `temp` variable, in which we store [i]. Basically, as long as [j] is greater than 0 and les than the index the for loop is on, keep running the while loop. Inside the while, we check each index of the array from right to left and see if [j] is less than [i]. Once [j] becomes less than [i], we "insert" it into the array by setting array[j] to array[j+1]. 

- Time:
  - For time, this algorithm runs O(n^2) since it has a nested while loop inside of a for loop.

- Space:
 - For space, this algorithm runs at O(1) since it modifies the array in place.
 
## Solution
<!-- Embedded whiteboard image -->
For a detailed walkthrough of the solution, including visual examples, click [HERE](BLOG.md).