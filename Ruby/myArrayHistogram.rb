myArray = [1,2,1,3,3,1,2,1,5,1]; 
Hash[*myArray.group_by{ |v| v }.flat_map{ |k, v| [k, v.size] }];    

#Incompleto

#@utor Andrés Monge
