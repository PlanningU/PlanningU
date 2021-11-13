# this is a helper file to aid in quickly adding resources
from os import listdir
from os.path import isfile, join

path = "/PlanningU/src/assets/MHF4U/Unit 9"
onlyfiles = [f for f in listdir("."+path) if isfile(join("."+path, f))]

print("<h2 class=\"coursesubheading\">Resources:</h2>\n<ul id=\"resources\">")
for file in sorted(onlyfiles):
    if(file.lower() == "chapter tips.docx"):
        continue
    print("<li class=\"resourcelink\"><a target=\"_blank\" href=\""+path+"/"+file+"\">"+file+"</a></li>")


print("</ul>")

