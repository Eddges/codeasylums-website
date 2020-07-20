import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumDSA.module.css'

class CurriculumDSA extends React.Component{

    render() {

        const section1 = [
            {
                link : "Array Based Problems",
                details : "An array is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. After creation, its length is fixed."
            },
            {
                link : "Linked lists",
                details : "A linked list is a linear data structure where each element is a separate object. Linked list elements are not stored at contiguous location; the elements are linked using pointers. Each node of a list is made up of two items - the data and a reference to the next node."
            }
        ]

        const section2 = [
            {
                link : "Stacks",
                details : "A stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed."
            },
            {
                link : "Queues",
                details : "A queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence."
            }
        ]

        const section3 = [
            {
                link : "Number Theory",
                details : "Problems in competitive programming which involve Mathematics are are usually about number theory. If you know number theory, that increases your ammo heavily in solving a lot of tougher problems, and helps you in getting a strong hold on a lot of other problems, too."
            },
            {
                link : "Recursion",
                details : "Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. Such problems can generally be solved by iteration, but this needs to identify and index the smaller instances at programming time."
            }
        ]

        const section4 = [
            {
                link : "Trees",
                details : "A tree is a widely used abstract data type that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes."
            }
        ]
        const section5 = [
            {
                link : "Binary Search Trees",
                details : "Binary search trees, sometimes called ordered or sorted binary trees, are a particular type of container: a data structure that stores items in memory."
            },
            {
                link : "Heaps",
                details : "A heap is a tree-based data structure in which all the nodes of the tree are in a specific order. For example, if is the parent node of , then the value of follows a specific order with respect to the value of and the same order will be followed across the tree."
            }
        ]
        const section6 = [
            {
                link : "Sorting - Quick Sort and Merge Sort",
                details : "Sorting refers to arranging data in a particular format. Sorting algorithm specifies the way to arrange data in a particular order."
            },
            {
                link : "D&C and Backtracking",
                details : "Divide and conquer (D&C) is an algorithm design paradigm based on multi-branched recursion. Backtracking is a general algorithm for finding all solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons a candidate as soon as it determines that the candidate cannot possibly be completed to a valid solution."
            }
        ]
        const section7 = [
            {
                link : "Basic Dynamic Programming",
                details : "Dynamic programming is used where we have problems, which can be divided into similar sub-problems, so that their results can be re-used. Mostly, these algorithms are used for optimization. Before solving the in-hand sub-problem, dynamic algorithm will try to examine the results of the previously solved sub-problems."
            },
            {
                link : "Graphs",
                details : "In computer science, a graph is an abstract data type that is meant to implement the undirected graph and directed graph concepts from the field of graph theory within mathematics."
            }
        ]
        const section8 = [
            {
                link : "System Design",
                details : "Systems design is the process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements. Systems design could be seen as the application of systems theory to product development."
            }
        ]

        return(
            <div className={classes.CurriculumFullStack} id="curriculum">
                <p className={classes.title}>Course Curriculum</p>
                <p className={classes.Description}>This course is for those people who are new to the world of data structures and looking forward to implementing data structures in depth to crack coding interviews of mainly tier-2 companies</p>
                <Curriculum2Item title="Module 1" topic1="Array-Based Problems" topic2="Linked lists" section={section1} />
                <Curriculum2Item title="Module 2" topic1="ReactJS" topic2="ExpressJS" section={section2} />
                <Curriculum2Item title="Module 3" topic1="NodeJS" topic2="MongoDB" section={section3} />
                <Curriculum2Item title="Module 4" topic1="NodeJS" topic2="MongoDB" section={section4} />
                <Curriculum2Item title="Module 5" topic1="NodeJS" topic2="MongoDB" section={section5} />
                <Curriculum2Item title="Module 6" topic1="NodeJS" topic2="MongoDB" section={section6} />
                <Curriculum2Item title="Module 7" topic1="NodeJS" topic2="MongoDB" section={section7} />
                <Curriculum2Item title="Module 8" topic1="NodeJS" topic2="MongoDB" section={section8} />
            </div>
            
        )
    }
}

export default CurriculumDSA