#include<stdio.h>
int main(){
    FILE *fp;
    char filename[50];
    char ch;
    int spaces=0,lines=0,tabs=0,chars=0;

    printf("Enter filename: ");
    scanf("%s",filename);
    fp = fopen(filename,"r");
    if(fp==NULL){
        printf("File Not Found");
        return 0;
    }
    while((ch=fgetc(fp))!=EOF){
        chars++;
        if(ch==' ') spaces++;
        else if(ch=='\t') tabs++;
        else if(ch=='\n') lines++;
    }
    fclose(fp);
    printf("\nSpaces = %d",spaces);
    printf("\nTabs = %d",tabs);
    printf("\nLines = %d",lines);
    printf("\nCharacters = %d",chars);

    return 0;
}