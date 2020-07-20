import React from 'react'
import Curriculum2Item from '../../Curriculum2Item/Curriculum2Item'
import classes from './CurriculumDSAdvanced.module.css'

class CurriculumDSAdvanced extends React.Component{

    render() {

        const section1 = [
            {
                link : "Advanced Trees + Binary Search Trees",
                details : "A tree is a widely used abstract data type that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes. Binary search trees, sometimes called ordered or sorted binary trees, are a particular type of container: a data structure that stores items in memory."
            },
        ]

        const section2 = [
            {
                link : "Recursion",
                details : "Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. Such problems can generally be solved by iteration, but this needs to identify and index the smaller instances at programming time."
            },
            {
                link : "Backtracking",
                details : "Backtracking is a general algorithm for finding all solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons a candidate as soon as it determines that the candidate cannot possibly be completed to a valid solution."
            }
        ]

        const section3 = [
            {
                link : "Dynamic Programing",
                details : "Dynamic programming is used where we have problems, which can be divided into similar sub-problems, so that their results can be re-used. Mostly, these algorithms are used for optimization. Before solving the in-hand sub-problem, dynamic algorithm will try to examine the results of the previously solved sub-problems."
            }
        ]

        const section4 = [
            {
                link : "Graphs",
                details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lectus sed purus tristique sagittis. Aliquam molestie eu ligula eget bibendum. Nullam sapien nisi, varius a lacinia vel, posuere sit amet mi"
            }
        ]
        const section5 = [
            {
                link : "Dynamic Programming",
                details : "Dynamic programming is used where we have problems, which can be divided into similar sub-problems, so that their results can be re-used. Mostly, these algorithms are used for optimization. Before solving the in-hand sub-problem, dynamic algorithm will try to examine the results of the previously solved sub-problems."
            },
            {
                link : "Graphs",
                details : "In computer science, a graph is an abstract data type that is meant to implement the undirected graph and directed graph concepts from the field of graph theory within mathematics."
            },
            {
                link : "BIT Masking",
                details : "A bitmask is data that is used for bitwise operations, particularly in a bit field. Using a mask, multiple bits in a byte, nibble, word etc. can be set either on, off or inverted from on to off in a single bitwise operation."
            }
        ]
        
        const section6 = [
            {
                link : "String",
                details : "A string is a data type used in programming, such as an integer and floating point unit, but is used to represent text rather than numbers."
            },
            {
                link : "KMP",
                details : "Knuth-Morris-Pratt Algorithm. Knuth Morris Pratt (KMP) is an algorithm, which checks the characters from left to right. When a pattern has a sub-pattern appears more than one in the sub-pattern, it uses that property to improve the time complexity, also for in the worst case. The time complexity of KMP is O(n)."
            },
            {
                link : "Tries",
                details : "A trie is a tree-like data structure whose nodes store the letters of an alphabet. By structuring the nodes in a particular way, words and strings can be retrieved from the structure by traversing down a branch path of the tree. Tries in the context of computer science are a relatively new thing."
            }
        ]
        const section7 = [
            {
                link : "Segmented Tree",
                details : "A Segment Tree is a data structure that allows answering range queries over an array effectively, while still being flexible enough to allow modifying the array. This includes finding the sum of consecutive array elements a[l… r], or finding the minimum element in a such a range in O(logn) time."
            },
            {
                link : "Binary Indexed Trees",
                details : "Binary Indexed trees are used to implement the arithmetic coding algorithm. Development of operations it supports were primarily motivated by use in that case. Binary Indexed Tree can be used to count inversions in an array in O(N*logN) time."
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
                <p className={classes.Description}>This course is majorly for the professionals who are looking forward to cracking coding interviews for tier - 1 product-based companies</p>
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

export default CurriculumDSAdvanced