import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumDSA.module.css'

class CurriculumDSA extends React.Component{

    render() {

        const section1 = [
            {
                link : "Python - 7 Sessions",
                details : "Keywords, Identifiers, Variables, Standard Input & Output, Operators, Control Flow, Strings, Loops, Lists, Tuples, Dictionary, Functions, Lambda, Module, Packages, Error Handling, Map, Reduce, Filter, OOPS, Bitwise operators, Range, Pattern formation, Analysis of Algorithms, Time Complexity, Space Complexity, Analysis of Loops, Lower bound and upper Bound theory, Amortised Analysis, Asymptotic Analysis, Recursion."
            }
        ]

        const section2 = [
            {
                link : "Number Theory- 4 Sessions",
                details : "GCD-LCM, Factorials, Fibonacci, Prime Factors, Euler’s Totient Function,  Primirality Test, Modular Exponentiation, Sieve of Eratosthenes, Minmax Game, Nim Game, Bit Manipulation, Bit Masking."
            }
        ]

        const section3 = [
            {
                link : "Arrays -  4 Sessions",
                details : "Two pointer approach, Three pointer approach, Sliding window technique, Kadane’s Algorithm, Linear Search, Binary Search, Discrete Binary Search."
            }
        ]

        const section4 = [
            {
                link : "Sorting- 3 Sessions",
                details : "Bubble Sort,Selection Sort, Insertion Sort, Quick Sort, Merge Sort, Heap Sort."
            }
        ]
        const section5 = [
            {
                link : "Linked-Lists- 4 Sessions",
                details : "Insertion,Updation, Deletion in a linked list, Finding and Removing loop in a Linked list, Sorting in Linked list, Doubly Linked List, Circular Linked List Josephus Problem."
            }
        ]
        const section6 = [
            {
                link : "Stack and Queue- 6 Sessions",
                details : "Insertion and deletion in Stacks, Stock Span Problem, Histogram Program, Balanced Parentheses Problem, Insertion and Deletion in Queue, Stack using Queues, Queue using Stacks, STL implementation for Stack and Queues."
            }
        ]
        const section7 = [
            {
                link : "Trees- Binary Tree and Binary Search Tree- 6 Sessions",
                details : "Insertion, Updation, Deletion in a Tree, Pre-order traversal, Post-order Traversal, In-order Traversal, Level Order Traversal, Boundary Traversal, Diagonal Traversal, Reverse Traversal, Lowest Common Ancestor problem, Mirror of a tree, Binary tree to Linked List and vice-versa."
            }
        ]
        const section8 = [
            {
                link : "Graphs- 6 Sessions",
                details : "Graph Representation, Insertion, Updation and Deletion in a Graph, Breadth-first Search, Depth-first Search, Minimum Spanning Tree, Dijkstra’s Algorithm,  Prim’s Algorithm, Kruskal’s Algorithm, Topological Sort."
            }
        ]
        const section9 = [
            {
                link : "Recursion and Backtracking- 3 Sessions",
                details : "Backtracking vs DFS, N-Queens Problem, Knight’s Tour Problem, Sudoku Solving Problem, Rat in Maze Problem."
            }
        ]
        const section10 = [
            {
                link : "Greedy Algorithm- 3 Sessions",
                details : "Activity Selection Problem, Job Sequencing Problem, Egyptian Fraction, Fractional Knapsack Problem, Huffman Coding."
            }
        ]
        const section11 = [
            {
                link : "Dynamic Programming- 6 Sessions",
                details : "Top-Down approach, Bottom-up approach, Fibonacci Problem, Knapsack Problem, Egg Dropping Puzzle, Longest Increasing Subsequence, Longest Common Subsequence, Edit Distance, Minimum Cost Path, Cutting Rod Problem. Staircase Problem."
            }
        ]
        const section12 = [
            {
                link : "Strings- 4 Sessions",
                details : "KMP Algorithm, Z Algorithm, Tries, String Manipulation(Palindrome check, Substring check)."
            }
        ]
        const section13 = [
            {
                link : "Mock Interviews - 2 Sessions",
                details : "Activity Selection Problem, Job Sequencing Problem, Egyptian Fraction, Fractional Knapsack Problem, Huffman Coding."
            }
        ]
        const section14 = [
            {
                link : "Coding Competitions - 15 Tests",
                details : "Coding tests from various algorithms, for pressure handling experience for company interviews."
            }
        ]
        const section15 = [
            {
                link : "Assignment Discussion- 15 Sessions",
                details : "Each topic consists of proper assignment questions for which detailed discussion classes will be hosted."
            }
        ]
        const section16 = [
            {
                link : "Placement Assistance - 2 Sessions",
                details : "Tech talks and discussions around the tech and industry culture. Also, resume consultation by the industry panel."
            }
        ]


        return(
            <div className={classes.CurriculumFullStack} id="curriculum">
                <p className={classes.title}>Course Curriculum</p>
                <p className={classes.Description}>Specifically tailored for those looking to boost their knowledge in Data Structures & Algorithms, our curated content takes a deep dive into algorithms like Trees, Graphs & Dynamic Programming. Supported with HackerRank Contests, Self Practice Material, and a Hands-On Coding Sessions and Pair Programming. We ensure that you'll be ready for every coding test.</p>
                <Curriculum2Item title="Module 1" topic1="Array-Based Problems" topic2="Linked lists" section={section1} />
                <Curriculum2Item title="Module 2" topic1="ReactJS" topic2="ExpressJS" section={section2} />
                <Curriculum2Item title="Module 3" topic1="NodeJS" topic2="MongoDB" section={section3} />
                <Curriculum2Item title="Module 4" topic1="NodeJS" topic2="MongoDB" section={section4} />
                <Curriculum2Item title="Module 5" topic1="NodeJS" topic2="MongoDB" section={section5} />
                <Curriculum2Item title="Module 6" topic1="NodeJS" topic2="MongoDB" section={section6} />
                <Curriculum2Item title="Module 7" topic1="NodeJS" topic2="MongoDB" section={section7} />
                <Curriculum2Item title="Module 8" topic1="NodeJS" topic2="MongoDB" section={section8} />
                <Curriculum2Item title="Module 9" topic1="NodeJS" topic2="MongoDB" section={section9} />
                <Curriculum2Item title="Module 10" topic1="NodeJS" topic2="MongoDB" section={section10} />
                <Curriculum2Item title="Module 11" topic1="NodeJS" topic2="MongoDB" section={section11} />
                <Curriculum2Item title="Module 12" topic1="NodeJS" topic2="MongoDB" section={section12} />
                <Curriculum2Item title="Module 13" topic1="NodeJS" topic2="MongoDB" section={section13} />
                <Curriculum2Item title="Module 14" topic1="NodeJS" topic2="MongoDB" section={section14} />
                <Curriculum2Item title="Module 15" topic1="NodeJS" topic2="MongoDB" section={section15} />
                <Curriculum2Item title="Module 16" topic1="NodeJS" topic2="MongoDB" section={section16} />

            </div>
            
        )
    }
}

export default CurriculumDSA