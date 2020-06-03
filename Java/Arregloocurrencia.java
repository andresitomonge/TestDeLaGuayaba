class Main {
  public static void main(String[] args) {
    
    
    int[] myArray = {1,2,2,5,4,6,7,8,8,8};
    int[] cuentarray = new int[9];


        for(int i=0; i<myArray.length; i++)
        {
            cuentarray[myArray[i]]+=1;
        }

        for (int k=1; k<cuentarray.length;k++)
        {
  
            if(cuentarray[k]>=3){
              System.out.printf("Ocurrencias:"+ cuentarray[k]+"\n");
              
              System.out.printf("Número:"+k+"\n");
            }
            
        }
  }
}

//@utor Andres Monge