# Prerequisites for KubeBuddy

KubeBuddy requires a few prerequisites for running on your machine. In this blog, we will go through steps for checking those prerequisites and configuring them for different operating systems like Windows, macOS, and multiple Linux distros like RHEL, Ubuntu, etc.

## Prerequisites for KubeBuddy are:

### Git

If you are installing KubeBuddy using the GitHub repository, you require Git installed on your system to be able to fetch the application code.

#### Windows

1. Navigate to [Git for Windows](https://git-scm.com/download/win) and download the latest version.
2. Open the Windows command prompt and type:

   ```sh
   git version
   ```

   to verify if Git was installed.

#### Mac

1. Open a terminal window and install Git using the following command:

   ```sh
   brew install git
   ```

2. Once the command output has completed, verify the installation by typing:

   ```sh
   git version
   ```

#### Linux

You can install Git on Linux through the package management tool that comes with your distribution.

##### Debian/Ubuntu

1. To install Git, run the following command:

   ```sh
   sudo apt-get install git
   ```

2. Verify the installation:

   ```sh
   git version
   ```

##### RHEL

1. Run the following command:

   ```sh
   sudo dnf install git
   ```

2. Verify the installation:

   ```sh
   git version
   ```

---

### Python, pip, and venv

KubeBuddy relies on Python for various API interactions. To ensure compatibility, you must install **Python 3.10 or above**. You also require `pip` (package manager for Python) to install dependencies and `venv` (virtual environment) for creating isolated environments.

#### Windows

1. Navigate to [Python releases for Windows](https://www.python.org/downloads/windows/) and download the latest version (3.10+).

2. Open the Windows command prompt and verify Python installation:

   ```sh
   python --version
   ```

3. Check if `venv` is installed:

   ```sh
   python -m venv --help
   ```

#### Mac

**Using the Official Installer:**

- Navigate to [Python releases for macOS](https://www.python.org/downloads/macos/) and download the latest version (3.10+).

**Using Homebrew:**

1. Open a terminal window and install Python:

   ```sh
   brew install python
   ```

2. Verify the installation and check for `venv`:

   ```sh
   python --version
   ```

#### Linux

Most Linux distributions come with Python pre-installed, but the version may not be the latest. Ensure you install Python 3.10+.

##### Debian/Ubuntu

1. Update the package repository:

   ```sh
   sudo apt update
   ```

2. Install Python, pip, and venv:

   ```sh
   sudo apt install python3 python3-pip python3-venv
   ```

3. Verify the installation:

   ```sh
   python3 --version
   ```

##### RHEL

1. Update the package repository:

   ```sh
   sudo dnf update
   ```

2. Install Python, pip, and venv:

   ```sh
   sudo dnf install python3 python3-pip python3-venv
   ```

3. Verify the installation:

   ```sh
   python3 --version
   ```

---

## Final Thoughts

With Git, Python, pip, and venv successfully installed, you are now ready to begin working with KubeBuddy. Having these prerequisites set up ensures a smooth installation experience, allowing you to easily set up KubeBuddy on your machine and start monitoring your Kubernetes cluster.

If you encounter any issues or have any questions during the setup process, feel free to check the official KubeBuddy documentation or reach out to the community for support.
