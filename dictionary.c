// Implements a dictionary's functionality

#include <ctype.h>
#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
}
node;

int dsize = 0;
// TODO: Choose number of buckets in hash table
const unsigned int N = 26 * 26;  // 3 Letter Hash

// Hash table
node *table[N];

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    // TODO
    char *cpy = malloc(sizeof(word));
    if (cpy == NULL)
    {
        return false;
    }
    strcpy(cpy, word);
    for (int i = 0; i < strlen(word); i++)
    {
        cpy[i] = tolower(word[i]);
    }
    int index = (toupper(word[0]) - 'A') * 26 + toupper(word[1]) - 'A' ;
    if (index < 1)
    {
        index = 0;
    }
    node *ptr = table[index];
    while (ptr != NULL)
    {
        if (strcmp(ptr->word, cpy) == 0)
        {
            return true;
        }
        else
        {
            ptr = ptr->next;
        }
    }
    free(ptr);
    free(cpy);
    return false;

}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO: Improve this hash function
    int firstletter = (toupper(word[0]) - 'A') * 26;
    int secondletter = (toupper(word[1]) - 'A');
    if (secondletter < 0)
    {
        secondletter = 0;
    }
    if (firstletter + secondletter == 501)
    {
        int i = 0;
    }
    return firstletter + secondletter;
}

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    // TODO
    FILE *file = fopen(dictionary, "r");
    if (file == NULL)
    {
        return false;
    }
    node *tmp = malloc(sizeof(node));
    if (tmp == NULL)
    {
        return false;
    }
    while (fscanf(file, "%s", tmp->word) != EOF)
    {
        node *word = malloc(sizeof(node));
        if (word == NULL)
        {
            return false;
        }
        strcpy(word->word, tmp->word);

        int i = hash(word->word);
        if (table[i] == NULL)
        {
            table[i] = word;
            dsize++;
        }
        else
        {
            word->next = table[i];
            table[i] = word;
            dsize++;
        }
    }
    free(tmp);
    fclose(file);
    return true;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    // TODO
    return dsize;
}

// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    // TODO
    node *cursor = malloc(sizeof(node));
    node *tmp = malloc(sizeof(node));
    if (cursor == NULL || tmp == NULL)
    {
        return false;
    }
    for (int i = 0; i < 26 * 26; i++)
    {
        if (table[i] != NULL)
        {
            cursor = table[i];
            while (cursor != NULL)
            {
                tmp = cursor;
                cursor = cursor->next;
                free(tmp);
            }
        }
    }
    free(cursor);
    return true;
}
