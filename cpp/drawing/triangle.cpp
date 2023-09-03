#include <iostream>
using namespace std;

int main(int argc, char const *argv[])
{
	int rows = 5;

	/*

	*
	**
	***
	****
	*****

	*/
	for (int i = 0; i < rows; ++i)
	{
		for (int j = 0; j < i + 1; ++j)
		{
			cout << "*";
		}
		cout << endl;
	}
	
	/*

	*****
	****
	***
	**
	*

	*/
	for (int i = rows; i >= 0; --i)
	{
		for (int j = 0; j < i; ++j)
		{
			cout << "*";
		}
		cout << endl;
	}

	/*

	    *
	   **
	  ***
	 ****
	*****

	*/
	for (int i = 0; i < rows; ++i)
	{
		for (int j = 0; j < rows - i - 1; ++j)
		{
			cout << " ";
		}
		for (int k = 0; k < i + 1; ++k)
		{
			cout << "*";
		}
		cout << endl;
	}
	
	/*

	*****
	 ****
	  ***
	   **
	    *

	*/
	for (int i = rows; i > 0; --i)
	{
		for (int j = 0; j < rows - i; ++j)
		{
			cout << " ";
		}
		for (int k = 0; k < i; ++k)
		{
			cout << "*";
		}
		cout << endl;
	}
	return 0;
}