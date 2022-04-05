/* KATA NAME: COMPLEMENTARY DNA <7 KYU>


In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
You function receives one side of the DNA (string, except for Haskell); you need to 
return the other complementary side. DNA strand is never empty or there is no DNA at all 
(again, except for Haskell).

Example: (input --> output)
A should be T and vice versa
Same for C and G
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
A should be T and vice versa
Same for C and G*/

// PREP
// Already in Array. Just need to map for letters and change? if A then T blah blah blah 

function DNAStrand(dna){
  //your code here
  let dnaArr = dna.split("")
    for(i= 0; i < dnaArr.length; i++){
      if(dnaArr[i]=== "A"){
        dnaArr[i] = "T"
        console.log(dna[i])
      }else if(dnaArr[i]=== "T"){
        dnaArr[i] = "A"
      }else if(dnaArr[i]=== "C"){
        dnaArr[i] = "G"
      }else if(dnaArr[i]=== "G"){
        dnaArr[i] = "C"
      }
      
    }
    console.log(dnaArr.join(""))
}
DNAStrand("AAAA")